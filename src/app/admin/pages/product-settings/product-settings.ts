import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  HostListener,
  inject,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';
import { Subscription } from 'rxjs';

import { Product } from '../../../models/productModel';
import { ProductSaveModel } from '../../../models/productSaveModel';
import { ProductService } from '../../../services/product-service';
import { UploadPhotoService } from '../../../services/upload-photo-service';
import { ResponseModel } from '../../../models/responseModel';
import { Category } from '../../../models/categoryModel';
import { CategoryService } from '../../../services/category-service';
import { AssetService } from '../../../services/asset-service';
import { Allergen } from '../../../models/allergenModel';
import { AllergenService } from '../../../services/allergen-service';

@Component({
  selector: 'app-product-settings',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-settings.html',
  styleUrl: './product-settings.css',
})
export class ProductSettings implements OnInit, AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  products: Product[] = [];
  selectedProduct: Product | null = null;

  private productsSwiper?: Swiper;
  private productsSwiperHost?: HTMLDivElement;
  private productsRequestSub?: Subscription;
  private viewportSyncTimer?: ReturnType<typeof setTimeout>;

  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('productsRail') productsRail?: ElementRef<HTMLDivElement>;

  selectedFile: File | null = null;
  previewUrl: string | null = null;

  allCategories: Category[] = [];
  allAllergens: Allergen[] = [];

  imageRemoved = false;
  isDefaultImage = false;

  productUpdateForm!: FormGroup;

  selectedCategoryId: number | null = null;
  filteredCategoryId: number | null = null;
  isMobileView = false;

  ingredientInput = '';
  ingredientNames: string[] = [];
  selectedAllergenIds: number[] = [];

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private uploadPhotoService: UploadPhotoService,
    private categoryService: CategoryService,
    public assetService: AssetService,
    private allergenService: AllergenService
  ) {}

  ngOnInit(): void {
    this.updateViewportMode();
    this.loadAllCategories();
    this.loadAllergens();
    this.createProductAddForm();
  }

  ngAfterViewInit(): void {
    this.syncProductsRailWithViewport();
  }

  ngOnDestroy(): void {
    this.productsSwiper?.destroy(true, true);
    this.productsRequestSub?.unsubscribe();
    if (this.viewportSyncTimer) {
      clearTimeout(this.viewportSyncTimer);
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateViewportMode();
    this.syncProductsRailWithViewport();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (!file) return;

    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = e => (this.previewUrl = e.target?.result as string);
    reader.readAsDataURL(file);
  }

  removeImage() {
    this.selectedFile = null;
    this.previewUrl = this.assetService.getProduct('nophoto.jpg');
    this.imageRemoved = true;
    this.isDefaultImage = true;

    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  addIngredient() {
    const normalized = this.normalizeIngredient(this.ingredientInput);
    if (!normalized) {
      return;
    }

    const exists = this.ingredientNames.some(
      i => i.toLocaleLowerCase('tr-TR') === normalized.toLocaleLowerCase('tr-TR')
    );

    if (exists) {
      this.toastrService.warning('Bu malzeme zaten eklendi.');
      return;
    }

    this.ingredientNames = [...this.ingredientNames, normalized];
    this.ingredientInput = '';
  }

  removeIngredient(index: number) {
    this.ingredientNames = this.ingredientNames.filter((_, i) => i !== index);
  }

  onIngredientEnter(event: Event) {
    event.preventDefault();
    this.addIngredient();
  }

  toggleAllergen(allergenId: number, isChecked: boolean) {
    if (isChecked) {
      if (!this.selectedAllergenIds.includes(allergenId)) {
        this.selectedAllergenIds = [...this.selectedAllergenIds, allergenId];
      }
      return;
    }

    this.selectedAllergenIds = this.selectedAllergenIds.filter(id => id !== allergenId);
  }

  isAllergenSelected(allergenId: number): boolean {
    return this.selectedAllergenIds.includes(allergenId);
  }

  getCategoryName(categoryId: number): string {
    return this.allCategories.find(category => category.categoryId === categoryId)?.categoryName || `Kategori #${categoryId}`;
  }

  getProductImageUrl(imageName: string | null | undefined): string {
    return this.assetService.getProduct(imageName || 'Quattro-logo.png');
  }

  trackByProductId(_: number, product: Product): number {
    return product.productId;
  }

  scrollProducts(direction: 'left' | 'right') {
    if (!this.productsSwiper) {
      return;
    }

    if (direction === 'right') {
      this.productsSwiper.slideNext();
      return;
    }

    this.productsSwiper.slidePrev();
  }

  private setupProductsSwiper(resetPosition = false) {
    const railElement = this.productsRail?.nativeElement;

    if (!this.isBrowser || !railElement) {
      this.destroyProductsSwiper();
      return;
    }

    if (this.productsSwiper && this.productsSwiperHost !== railElement) {
      this.destroyProductsSwiper();
    }

    if (this.productsSwiper) {
      if (resetPosition) {
        this.productsSwiper.slideTo(0, 0);
      }
      this.productsSwiper.update();
      return;
    }

    this.productsSwiperHost = railElement;
    this.productsSwiper = new Swiper(railElement, {
      modules: [FreeMode],
      slidesPerView: 'auto',
      spaceBetween: 12,
      freeMode: true,
      simulateTouch: true,
      allowTouchMove: true,
      breakpoints: {
        769: {
          spaceBetween: 18,
        },
      },
    });
  }

  private refreshProductsSwiper(resetPosition = false) {
    if (!this.isBrowser) {
      return;
    }

    if (this.products.length === 0) {
      this.destroyProductsSwiper();
      return;
    }

    setTimeout(() => {
      this.setupProductsSwiper(resetPosition);
      this.productsSwiper?.update();
    });
  }

  private destroyProductsSwiper() {
    this.productsSwiper?.destroy(true, true);
    this.productsSwiper = undefined;
    this.productsSwiperHost = undefined;
  }

  loadAllCategories() {
    this.categoryService.getAllCategories().subscribe((response: any) => {
      this.allCategories = response.data;

      if (this.allCategories.length > 0) {
        this.filteredCategoryId = this.allCategories[0].categoryId;
        this.onCategoryChange(true);
        return;
      }

      this.filteredCategoryId = null;
      this.loadProducts(true);
    });
  }

  loadAllergens() {
    this.allergenService.getAllAllergens().subscribe((response: any) => {
      this.allAllergens = response.data;
    });
  }

  createProductAddForm() {
    this.productUpdateForm = this.formBuilder.group({
      productId: ['', Validators.required],
      categoryId: ['', Validators.required],
      productName: ['', Validators.required],
      description: [''],
      tooltip: [''],
      price: ['', Validators.required],
      isFeatured: [null, Validators.required],
    });
  }

  loadProducts(resetPosition = false) {
    this.productsRequestSub?.unsubscribe();
    this.productsRequestSub = this.productService.getAllProducts().subscribe(result => {
      this.products = result.data;
      this.refreshProductsSwiper(resetPosition);
    });
  }

  getProductsByCategory(categoryId: number, resetPosition = false) {
    this.productsRequestSub?.unsubscribe();
    this.productsRequestSub = this.productService.getProductsByCategoryId(categoryId).subscribe(res => {
      this.products = res.data;
      this.refreshProductsSwiper(resetPosition);
    });
  }

  onCategoryChange(resetPosition = false) {
    if (this.filteredCategoryId == null) {
      this.loadProducts(resetPosition);
    } else {
      this.getProductsByCategory(this.filteredCategoryId, resetPosition);
    }
  }

  DeleteProduct(product: Product) {
    if (confirm(`${product.productName} silinsin mi? Islem geri alinamaz!`)) {
      this.productService.deleteProduct(product.productId).subscribe((_: ResponseModel) => {
        this.toastrService.success(`${product.productName} basariyla silindi`);
        this.cancelSelect();
        this.onCategoryChange(false);
      });
    }
  }

  SelectProduct(product: Product) {
    this.selectedProduct = product;

    this.productUpdateForm.patchValue({
      productId: product.productId,
      categoryId: product.categoryId,
      productName: product.productName,
      description: product.description,
      tooltip: product.tooltip,
      price: product.price,
      isFeatured: product.isFeatured,
    });

    this.ingredientNames = [...(product.ingredientNames ?? [])];
    this.selectedAllergenIds = (product.allergens ?? []).map(a => a.allergenId);
    this.ingredientInput = '';

    this.previewUrl = product.image
      ? this.assetService.getProduct(product.image)
      : this.assetService.getProduct('nophoto.jpg');

    this.isDefaultImage = product.image === 'nophoto.jpg';
    this.imageRemoved = false;
    this.selectedFile = null;
  }

  cancelSelect() {
    this.productUpdateForm.reset();
    this.selectedProduct = null;
    this.previewUrl = null;
    this.selectedFile = null;
    this.imageRemoved = false;
    this.isDefaultImage = false;
    this.ingredientInput = '';
    this.ingredientNames = [];
    this.selectedAllergenIds = [];

    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }
  }

  updateProduct() {
    if (this.productUpdateForm.invalid || !this.selectedProduct) {
      this.toastrService.error('Form gecersiz');
      return;
    }

    const formValue = this.productUpdateForm.value;

    const payload: ProductSaveModel = {
      categoryId: Number(formValue.categoryId),
      productName: formValue.productName,
      description: (formValue.description || '').trim() || null,
      tooltip: (formValue.tooltip || '').trim() || null,
      price: Number(formValue.price),
      isFeatured: !!formValue.isFeatured,
      image: this.resolveImageForUpdate(),
      ingredientNames: [...this.ingredientNames],
      allergenIds: [...this.selectedAllergenIds],
    };

    if (this.selectedFile) {
      this.uploadPhotoService.uploadImage(this.selectedFile).subscribe({
        next: (res: any) => {
          const uploadedImage = this.extractUploadedImageName(res);
          if (!uploadedImage) {
            this.toastrService.error('Yuklenen gorsel adi alinamadi');
            return;
          }

          payload.image = uploadedImage;
          this.sendUpdate(this.selectedProduct!.productId, payload);
        },
      });

      return;
    }

    this.sendUpdate(this.selectedProduct.productId, payload);
  }

  private sendUpdate(productId: number, payload: ProductSaveModel) {
    this.productService.updateProduct(productId, payload).subscribe({
      next: (response: any) => {
        if (response?.success === false) {
          this.toastrService.error(response.message || 'Urun guncellenemedi');
          return;
        }

        this.toastrService.success(response.message || 'Urun guncellendi');
        this.onCategoryChange(false);
        this.cancelSelect();
      },
    });
  }

  private resolveImageForUpdate(): string {
    if (this.imageRemoved && !this.selectedFile) {
      return 'nophoto.jpg';
    }

    if (this.selectedProduct?.image) {
      return this.selectedProduct.image;
    }

    return 'nophoto.jpg';
  }

  private normalizeIngredient(rawValue: string): string {
    return rawValue.trim().replace(/\s+/g, ' ');
  }

  private extractUploadedImageName(res: any): string | null {
    const rawValue = res?.fileName ?? res?.url ?? res?.data?.fileName ?? res?.data?.url ?? null;

    if (!rawValue || typeof rawValue !== 'string') {
      return null;
    }

    const normalized = rawValue.trim();
    if (!normalized) {
      return null;
    }

    const segments = normalized.split('/').filter(Boolean);
    return segments.length > 0 ? segments[segments.length - 1] : normalized;
  }

  private updateViewportMode() {
    if (!this.isBrowser) {
      this.isMobileView = false;
      return;
    }

    this.isMobileView = window.innerWidth <= 640;
  }

  private syncProductsRailWithViewport() {
    if (!this.isBrowser) {
      return;
    }

    if (this.viewportSyncTimer) {
      clearTimeout(this.viewportSyncTimer);
    }

    this.viewportSyncTimer = setTimeout(() => {
      if (this.isMobileView || this.products.length === 0) {
        this.destroyProductsSwiper();
        return;
      }

      this.setupProductsSwiper(false);
    }, 80);
  }
}
