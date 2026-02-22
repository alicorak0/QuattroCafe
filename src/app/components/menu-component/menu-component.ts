import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import Swiper from 'swiper';
import { Product } from '../../models/productModel';
import { RouterOutlet } from '@angular/router';


import { FreeMode } from 'swiper/modules';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu-component',
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent {


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }






  products: Product[] = [
    { productId: 1, categoryName: 'ana-yemekler', productName: 'Barbekü Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, özel barbekü sos, yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'barbekü-soslu-tavuk-anayemek.jpg' },
    { productId: 2, categoryName: 'atistirmalikler', productName: 'Çıtır Tavuk', description: 'Kızarmış paneli çıtır tavuk parçaları, patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 230, image: 'çıtır-tavuk-atıştırmalık.jpg' },
    { productId: 3, categoryName: 'salatalar', productName: 'Sezar Salata', description: 'Çıtır göbek marullar, kroton ekmek, özel sezar sos, ızgara tavuk dilimleri, çeri domatesler ile servis edilir.', tooltip: 'En çok satan', price: 310, image: 'sezar-salata.jpg' },


  ]
  constructor(private productService: ProductService) { }

  ngAfterViewInit(): void {

    // Slider başlat
    new Swiper('.swiper', {
      modules: [FreeMode],
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true // mouse ve touch drag
    });
  }

}
