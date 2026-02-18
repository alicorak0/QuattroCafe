import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainLayoutComponent } from "./layout/main-layout-component/main-layout-component";
import { MainMenuComponent } from "./components/main-menu-component/main-menu-component";
import { MenuComponent } from "./components/menu-component/menu-component";
import { ProductComponent } from "./components/product-component/product-component";
import { CategoriesComponent } from "./components/categories-component/categories-component";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // 🔥 EN ÜST LAYOUT
    children: [

      // ana sayfa
      {
        path: '',
        component: MainMenuComponent,
        data: { header: true }
      },

      // menu sayfası
      {
        path: 'menu',
        component: MenuComponent,
        data: { header: false }, // 🔥 kapatıyoruz

        children: [
          { path: '', component: CategoriesComponent },
          { path: ':name', component: ProductComponent }
        ]
      }

    ]
  }
];

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class  AppRoutingModule{

}

