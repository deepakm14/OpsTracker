import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationmainviewComponent } from './escalationmainview.component';

describe('EscalationmainviewComponent', () => {
  let component: EscalationmainviewComponent;
  let fixture: ComponentFixture<EscalationmainviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationmainviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationmainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
