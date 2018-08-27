import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationupdateComponent } from './escalationupdate.component';

describe('EscalationupdateComponent', () => {
  let component: EscalationupdateComponent;
  let fixture: ComponentFixture<EscalationupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
