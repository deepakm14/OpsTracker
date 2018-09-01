import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstrackermanpowerdialogComponent } from './opstrackermanpowerdialog.component';

describe('OpstrackermanpowerdialogComponent', () => {
  let component: OpstrackermanpowerdialogComponent;
  let fixture: ComponentFixture<OpstrackermanpowerdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpstrackermanpowerdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpstrackermanpowerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
