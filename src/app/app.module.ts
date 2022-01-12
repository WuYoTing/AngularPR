import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TopNavComponent} from './pages/layouts/top-nav/top-nav.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './pages/content/home/home.component';
import {ProductsComponent} from './pages/content/products/products.component';
import {MenubarModule} from "primeng/menubar";
import {TabMenuModule} from "primeng/tabmenu";
import {AppRoutingModule} from './app-routing.module';
import {CalendarComponent} from './pages/content/calendar/calendar.component';
import {CalculatorComponent} from './pages/content/calculator/calculator.component';
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PlaygroundComponent} from './pages/content/playground/playground.component';
import {BlockUIModule} from "primeng/blockui";
import {PanelModule} from "primeng/panel";
import {PdfViewerComponent} from './pages/content/pdf-viewer/pdf-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    ProductsComponent,
    CalendarComponent,
    CalculatorComponent,
    PlaygroundComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    RouterModule,
    MenubarModule,
    TabMenuModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    BlockUIModule,
    PanelModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
