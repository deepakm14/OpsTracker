import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitematerialdialogComponent } from './sitematerialdialog.component';

describe('SitematerialdialogComponent', () => {
  let component: SitematerialdialogComponent;
  let fixture: ComponentFixture<SitematerialdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitematerialdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitematerialdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
