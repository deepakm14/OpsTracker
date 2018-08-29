import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationtrackerviewComponent } from './escalationtrackerview.component';

describe('EscalationtrackerviewComponent', () => {
  let component: EscalationtrackerviewComponent;
  let fixture: ComponentFixture<EscalationtrackerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationtrackerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationtrackerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
