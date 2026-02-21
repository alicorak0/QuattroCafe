import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/productModel';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-product-component',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})

export class ProductComponent implements OnInit {
  products: Product[] = [];

    constructor(private route: ActivatedRoute, private productService: ProductService) {}
  activeKey: string = ''; // Sidebar hangi kategori aktif

categoryNameMap: { [key: string]: string } = {
  'ana-yemekler': 'Ana Yemekler',
  'kahvaltı': 'Kahvaltı',
  'burgerler': 'Burgerler',
  'makarnalar': 'Makarnalar',
  'salatalar':"Salatalar",
  'wrapler':"Wrapler",
  'kruvasan-sandwichler':"Kruvasan  Sandwichler",
  'bowllar':"Bowllar",
   'tostlar':"Tostlar",
   'bazlamalar':"Bazlamalar",
   'gözlemeler':"Gözlemeler", 
   'atıştırmalıklar':"Atıştırmalıklar",
   'dünya-kahveleri':"Dünya Kahveleri",
   'kahveler':"Kahveler",
   'soğuk-kahveler':"Soğuk Kahveler",
   'çaylar':"Çaylar",
   'meşrubatlar':"Meşrubatlar",
     

};



     ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.activeKey = params['name']; // burgers, snacks, desserts vs

    if (this.activeKey) {
      this.loadProducts(this.activeKey); // kategori varsa
    } else {
      this.products = this.productService.getAll(); // kategori yoksa tüm ürünleri göster
    }
  });
}


 loadProducts(category: string) {
    this.products = this.productService.getByCategory(category);
  }


}
