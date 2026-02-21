import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header-component';
import { FooterComponent } from "../../components/footer-component/footer-component";
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout-component',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css',
})
export class MainLayoutComponent {

  showHeader = true;

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {

        // 🔥 MENÜDEYSE header kapat
        this.showHeader = !this.router.url.startsWith('/menu');
        this.showHeader = !this.router.url.startsWith('/contact');

      });
  }
  
}
