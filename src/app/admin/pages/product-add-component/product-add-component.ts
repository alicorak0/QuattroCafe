import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../services/product-service';
import { UploadPhotoService } from '../../../services/upload-photo-service';
import { Category } from '../../../models/categoryModel';
import { CategoryService } from '../../../services/category-service';
import { ProductSaveModel } from '../../../models/productSaveModel';
import { Allergen } from '../../../models/allergenModel';
import { AllergenService } from '../../../services/allergen-service';
import { AssetService } from '../../../services/asset-service';

@Component({
  selector: 'app-product-add-component',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, ToastrModule],
  templateUrl: './product-add-component.html',
  styleUrl: './product-add-component.css',
})
export class ProductAddComponent implements OnInit {
  productAddForm!: FormGroup;
  selectedFile: File | null = null;

  allCategories: Category[] = [];
  allAllergens: Allergen[] = [];

  ingredientInput = '';
  ingredientNames: string[] = [];
  selectedAllergenIds: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private productService: ProductService,
    private uploadPhotoService: UploadPhotoService,
    private categoryService: CategoryService,
    private allergenService: AllergenService,
    public assetService: AssetService
  ) {}

  ngOnInit(): void {
    this.loadAllCategories();
    this.loadAllergens();
    this.createProductAddForm();
  }

  loadAllCategories() {
    this.categoryService.getAllCategories().subscribe((response: any) => {
      this.allCategories = response.data;
    });
  }

  loadAllergens() {
    this.allergenService.getAllAllergens().subscribe((response: any) => {
      this.allAllergens = response.data;
    });
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      categoryId: [null, Validators.required],
      productName: ['', Validators.required],
      description: [''],
      tooltip: [''],
      price: ['', Validators.required],
      isFeatured: [false],
    });
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

  add() {
    if (this.productAddForm.invalid) {
      this.toastrService.error('Lutfen tum alanlari doldurun!');
      return;
    }

    const formValue = this.productAddForm.value;
    const payload: ProductSaveModel = {
      categoryId: Number(formValue.categoryId),
      productName: formValue.productName,
      description: (formValue.description || '').trim() || null,
      tooltip: (formValue.tooltip || '').trim() || null,
      price: Number(formValue.price),
      isFeatured: !!formValue.isFeatured,
      image: 'nophoto.jpg',
      ingredientNames: [...this.ingredientNames],
      allergenIds: [...this.selectedAllergenIds],
    };

    if (this.selectedFile) {
      this.uploadPhotoService.uploadImage(this.selectedFile).subscribe({
        next: (res: any) => {
          payload.image = this.extractUploadedImageName(res) || 'nophoto.jpg';
          this.saveProduct(payload);
        },
      });
      return;
    }

    this.saveProduct(payload);
  }

  saveProduct(data: ProductSaveModel) {
    this.productService.addProduct(data).subscribe({
      next: (response: any) => {
        if (response?.success === false) {
          this.toastrService.error(response.message || 'Urun eklenemedi');
          return;
        }

        this.toastrService.success(response.message || 'Urun eklendi!');
        this.clearForm();
      },
    });
  }

  clearForm() {
    this.productAddForm.reset({ isFeatured: false, categoryId: null });
    this.selectedFile = null;
    this.ingredientInput = '';
    this.ingredientNames = [];
    this.selectedAllergenIds = [];
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (!file) {
      return;
    }

    this.selectedFile = file;
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
}
