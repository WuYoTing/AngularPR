import {Component, NgModule, OnInit} from '@angular/core';
import {PdfJsViewerModule} from "ng2-pdfjs-viewer";

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
@NgModule({
  declarations: [],
  imports: [PdfJsViewerModule],
  providers: [],
  bootstrap: []
})
export class PdfViewerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
