import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/productModel';
import { Category } from '../../models/categoryModel'; // Modelini ekle
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { AssetService } from '../../services/asset-service';

@Component({
  selector: 'app-product-search-component',
  standalone: true, // Eğer standalone kullanıyorsan
  imports: [CommonModule, FormsModule],
  templateUrl: './product-search-component.html',
  styleUrl: './product-search-component.css',
})
export class ProductSearchComponent implements OnChanges {
  searchName: string = '';
  @Input() allCategories: Category[] = []; // Parent'tan gelir
  groupedProducts: { [key: string]: Product[] } = {}; // Gruplanmış hali
  private lastSearchResults: Product[] = [];
  
  noResults: boolean = false;
  searchResponseMessage: string = '';
  searched: boolean = false;

  constructor(
    private productService: ProductService,
    private assetService: AssetService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allCategories'] && this.lastSearchResults.length > 0) {
      this.groupProductsByCategoryId(this.lastSearchResults);
    }
  }

  onSearch() {
    this.searched = true;

    if (!this.searchName.trim()) {
      this.noResults = true;
      this.searchResponseMessage = "Bir ürün adı girin";
      this.groupedProducts = {};
      return;
    }

    this.productService.productSearch(this.searchName).subscribe((res: SingleResponseModel<Product[]>) => {
      const results = res.data;
      this.lastSearchResults = results ?? [];

      if (!results || results.length === 0) {
        this.noResults = true;
        this.searchResponseMessage = "Sonuç Bulunamadı";
        this.groupedProducts = {};
      } else {
        this.noResults = false;
        this.searchResponseMessage = '';
        this.groupProductsByCategoryId(results);
      }
    });
  }

  private groupProductsByCategoryId(products: Product[]) {
    this.groupedProducts = {}; // Sıfırla

    products.forEach(product => {
      // Üründeki categoryId'ye göre allCategories içinden ismi bul
      const category = this.allCategories.find(c => c.categoryId === product.categoryId);
      const categoryName = category ? category.categoryName : 'Diğer';

      if (!this.groupedProducts[categoryName]) {
        this.groupedProducts[categoryName] = [];
      }
      this.groupedProducts[categoryName].push(product);
    });
  }

  getProductImageUrl(imageName: string | null | undefined): string {
    return this.assetService.getProduct(imageName);
  }
}