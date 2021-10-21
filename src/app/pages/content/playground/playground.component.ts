import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  blockedPanel: boolean = false;

  blockedDocument: boolean = false;

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Playground');
  }

  blockDocument() {
    this.blockedDocument = true;
    setTimeout(() => {
      this.blockedDocument = false;
    }, 3000);
  }

}
