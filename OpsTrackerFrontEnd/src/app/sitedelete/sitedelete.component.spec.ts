import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitedeleteComponent } from './sitedelete.component';

describe('SitedeleteComponent', () => {
  let component: SitedeleteComponent;
  let fixture: ComponentFixture<SitedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
