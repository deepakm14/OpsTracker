import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstrackermaterialdialogComponent } from './opstrackermaterialdialog.component';

describe('OpstrackermaterialdialogComponent', () => {
  let component: OpstrackermaterialdialogComponent;
  let fixture: ComponentFixture<OpstrackermaterialdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpstrackermaterialdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpstrackermaterialdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
