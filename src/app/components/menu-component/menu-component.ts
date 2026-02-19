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
    {
      productId: 1,
      categoryName: 'burgers',
      productName: 'Döner Sandviç',
      description: 'Özenle marine edilmiş 100 gr tavuk döner, taze ekmek ve özel soslarımızla hazırlanır.',
      tooltip: 'En çok satan',
      price: 150,
      image: 'dönerler-2.jpg'
    },
    {
      productId: 2,
      categoryName: 'burgers',
      productName: 'Patates Kızartması',
      description: 'Günlük taze patateslerden, dışı çıtır içi yumuşak olacak şekilde kızartılır.',
      tooltip: 'En çok satan',
      price: 150,
      image: 'aperatifler-1.jpg'
    },
    {
      productId: 3,
      categoryName: 'burgers',
      productName: 'Soğan Halkası',
      description: 'Altın sarısı kaplamasıyla çıtır çıtır, sıcak servis edilen soğan halkaları.',
      tooltip: 'En çok satan',
      price: 150,
      image: 'aperatifler-2.jpg'
    }


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
