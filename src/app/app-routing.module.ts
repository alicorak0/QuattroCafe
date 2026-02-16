import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainLayoutComponent } from "./layout/main-layout-component/main-layout-component";
import { MainMenuComponent } from "./components/main-menu-component/main-menu-component";
import { MenuComponent } from "./components/menu-component/menu-component";
import { ProductComponent } from "./components/product-component/product-component";
import { CategoriesComponent } from "./components/categories-component/categories-component";

const routes: Routes = [
 
{
    path: '',
    component: MainLayoutComponent,

    children:[
      {path: '', component:MainMenuComponent}

    ]
},

 {
    path: 'menu', component: MenuComponent, children: [
      {
        path: '',
        component: CategoriesComponent   // 👈 /menu açılınca burası render olur
      },
      {
        path:':name',component: ProductComponent   // 👈 /menu/burgers, /menu/snacks vs açılınca burası render olu  r
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

