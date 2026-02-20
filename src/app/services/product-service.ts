import { Injectable } from '@angular/core';
import { Product } from '../models/productModel';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { productId: 1, categoryName: 'kahveler', productName: 'Flat White', description: 'Flat White kahve', tooltip: 'En çok satan', price: 200, image: 'ızgaralar-1.jpg' },
   
    { productId: 2, categoryName: 'kahveler', productName: 'Cappuccino', description: 'Kremalı Cappuccino kahve', tooltip: 'En çok satan', price: 250, image: 'ızgaralar-2.jpg' },

   
  ];

  getAll(): Product[] {  // tüm ürünleri döndürür
    return this.products;
  }



  getByCategory(categoryName: string): Product[] {
    return this.products.filter(p => p.categoryName === categoryName);
  }

}
