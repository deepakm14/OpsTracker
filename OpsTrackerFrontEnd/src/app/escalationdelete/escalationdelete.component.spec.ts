import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationdeleteComponent } from './escalationdelete.component';

describe('EscalationdeleteComponent', () => {
  let component: EscalationdeleteComponent;
  let fixture: ComponentFixture<EscalationdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
