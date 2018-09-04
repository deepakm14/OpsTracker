import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsmaterialtransactionComponent } from './opsmaterialtransaction.component';

describe('OpsmaterialtransactionComponent', () => {
  let component: OpsmaterialtransactionComponent;
  let fixture: ComponentFixture<OpsmaterialtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsmaterialtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsmaterialtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
