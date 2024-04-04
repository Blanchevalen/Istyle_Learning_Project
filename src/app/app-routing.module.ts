import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { Carousel2Component } from "./carousel2/carousel2.component";

const routes:Routes=[];

@NgModule({
    imports:[RouterModule.forRoot([
        {path:"",component:Carousel2Component,pathMatch:'full'}
    ])],
    exports:[RouterModule]
})
export class AppRoutingModule{}