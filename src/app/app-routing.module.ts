import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/content/home/home.component";
import {CalendarComponent} from "./pages/content/calendar/calendar.component";
import {ProductsComponent} from "./pages/content/products/products.component";
import {CalculatorComponent} from "./pages/content/calculator/calculator.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'calender', component: CalendarComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'calculator', component: CalculatorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
