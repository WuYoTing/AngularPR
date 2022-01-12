import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  items!: MenuItem[];

  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
      {label: 'Hello World', icon: 'pi pi-fw', routerLink: '/home'},
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: '/calender'},
      {label: 'Products', icon: 'pi pi-fw pi-file', routerLink: "/products"},
      {label: 'Calculator', icon: 'pi pi-fw pi-plus', routerLink: "/calculator"},
      {label: 'Playground', icon: 'pi pi-fw pi-table', routerLink: "/playground"},
      {label: 'pdf viewer', icon: 'pi pi-fw file-o', routerLink: "/pdf-viewer"},
    ];

    this.activeItem = this.items[0];
  }
}
