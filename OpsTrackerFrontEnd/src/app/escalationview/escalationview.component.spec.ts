import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationviewComponent } from './escalationview.component';

describe('EscalationviewComponent', () => {
  let component: EscalationviewComponent;
  let fixture: ComponentFixture<EscalationviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
