import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationdialogComponent } from './escalationdialog.component';

describe('EscalationdialogComponent', () => {
  let component: EscalationdialogComponent;
  let fixture: ComponentFixture<EscalationdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
