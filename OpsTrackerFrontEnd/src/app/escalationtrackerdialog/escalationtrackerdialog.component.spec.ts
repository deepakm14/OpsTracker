import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationtrackerdialogComponent } from './escalationtrackerdialog.component';

describe('EscalationtrackerdialogComponent', () => {
  let component: EscalationtrackerdialogComponent;
  let fixture: ComponentFixture<EscalationtrackerdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationtrackerdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationtrackerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
