import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitedialogComponent } from './sitedialog.component';

describe('SitedialogComponent', () => {
  let component: SitedialogComponent;
  let fixture: ComponentFixture<SitedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
