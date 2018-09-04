import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsmanpowertransactionComponent } from './opsmanpowertransaction.component';

describe('OpsmanpowertransactionComponent', () => {
  let component: OpsmanpowertransactionComponent;
  let fixture: ComponentFixture<OpsmanpowertransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsmanpowertransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsmanpowertransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
