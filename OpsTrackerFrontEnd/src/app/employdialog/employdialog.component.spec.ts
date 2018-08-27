import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploydialogComponent } from './employdialog.component';

describe('EmploydialogComponent', () => {
  let component: EmploydialogComponent;
  let fixture: ComponentFixture<EmploydialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploydialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
