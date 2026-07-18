import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterModule, CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  protected readonly router = inject(Router);
  isMenuOpen = false;

  protected get isSolidHeader(): boolean {
    return this.router.url.startsWith('/contact');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
