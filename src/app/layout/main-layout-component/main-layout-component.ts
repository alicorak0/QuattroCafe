import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../component/header-component/header-component';
import { FooterComponent } from '../../component/footer-component/footer-component';

@Component({
  selector: 'app-main-layout-component',
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css',
})
export class MainLayoutComponent {
  protected readonly router = inject(Router);

  protected get shouldShowHeader(): boolean {
    return !this.router.url.startsWith('/menu');
  }
}
