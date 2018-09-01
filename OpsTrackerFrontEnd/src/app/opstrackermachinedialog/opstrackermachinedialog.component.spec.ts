import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstrackermachinedialogComponent } from './opstrackermachinedialog.component';

describe('OpstrackermachinedialogComponent', () => {
  let component: OpstrackermachinedialogComponent;
  let fixture: ComponentFixture<OpstrackermachinedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpstrackermachinedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpstrackermachinedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
