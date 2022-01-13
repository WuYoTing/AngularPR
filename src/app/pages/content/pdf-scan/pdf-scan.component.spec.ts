import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfScanComponent } from './pdf-scan.component';

describe('PdfScanComponent', () => {
  let component: PdfScanComponent;
  let fixture: ComponentFixture<PdfScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
