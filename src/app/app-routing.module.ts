import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainLayoutComponent } from "./layout/main-layout-component/main-layout-component";
import { MainMenuComponent } from "./components/main-menu-component/main-menu-component";

const routes: Routes = [
 
{
    path: '',
    component: MainLayoutComponent,

    children:[
      {path: '', component:MainMenuComponent}

    ]
  }


];

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class  AppRoutingModule{

}

