import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainLayoutComponent } from "./layout/main-layout-component/main-layout-component";
import { MainMenuComponent } from "./components/main-menu-component/main-menu-component";
import { MenuComponent } from "./components/menu-component/menu-component";
import { ProductComponent } from "./components/product-component/product-component";
import { CategoriesComponent } from "./components/categories-component/categories-component";
import { ContactComponent } from "./components/contact-component/contact-component";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // 🔥 EN ÜST LAYOUT
    children: [

      // ana sayfa
      {
        path: '',
        component: MainMenuComponent,
      },

      // menu sayfası
      {
        path: 'menu',
        component: MenuComponent,

        children: [
          { path: '', component: CategoriesComponent },
          { path: ':name', component: ProductComponent }
        ]
      },
      {
         path:'contact',component:ContactComponent
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

