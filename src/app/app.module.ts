import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { TopNavComponent } from './pages/layouts/top-nav/top-nav.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './pages/content/home/home.component';
import { ProductsComponent } from './pages/content/products/products.component';
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
