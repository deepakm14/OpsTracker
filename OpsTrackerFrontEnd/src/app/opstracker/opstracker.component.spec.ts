import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstrackerComponent } from './opstracker.component';

describe('OpstrackerComponent', () => {
  let component: OpstrackerComponent;
  let fixture: ComponentFixture<OpstrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpstrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpstrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
