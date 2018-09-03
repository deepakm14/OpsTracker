import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstrackermanpowerviewComponent } from './opstrackermanpowerview.component';

describe('OpstrackermanpowerviewComponent', () => {
  let component: OpstrackermanpowerviewComponent;
  let fixture: ComponentFixture<OpstrackermanpowerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpstrackermanpowerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpstrackermanpowerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
