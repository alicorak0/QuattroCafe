import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainLayoutComponent } from "./layout/main-layout-component/main-layout-component";

const routes: Routes = [
 



];

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class  AppRoutingModule{

}

