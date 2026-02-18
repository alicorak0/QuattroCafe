import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header-component/header-component';
import { FooterComponent } from "../../components/footer-component/footer-component";
import{ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main-layout-component',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css',
})
export class MainLayoutComponent {
  constructor(private route: ActivatedRoute) {}

   get showHeader(): boolean {
    return this.route.firstChild?.snapshot.data?.['header'] ?? true;
  }
  
}
