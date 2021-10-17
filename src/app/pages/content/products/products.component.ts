import {Component, OnInit} from '@angular/core';
import {products} from "../../../products";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = products;

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Products');
  }

  share() {
    window.alert('The product has been shared!');
  }

}
