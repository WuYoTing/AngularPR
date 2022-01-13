import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/content/home/home.component";
import {CalendarComponent} from "./pages/content/calendar/calendar.component";
import {ProductsComponent} from "./pages/content/products/products.component";
import {CalculatorComponent} from "./pages/content/calculator/calculator.component";
import {PlaygroundComponent} from "./pages/content/playground/playground.component";
import { PdfScanComponent } from './pages/content/pdf-scan/pdf-scan.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'calender', component: CalendarComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'playground', component: PlaygroundComponent},
  {path: 'pdf-scan', component: PdfScanComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
