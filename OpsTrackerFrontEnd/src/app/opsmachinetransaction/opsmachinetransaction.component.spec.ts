import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsmachinetransactionComponent } from './opsmachinetransaction.component';

describe('OpsmachinetransactionComponent', () => {
  let component: OpsmachinetransactionComponent;
  let fixture: ComponentFixture<OpsmachinetransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsmachinetransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsmachinetransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
