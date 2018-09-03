import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemachinedailogComponent } from './sitemachinedailog.component';

describe('SitemachinedailogComponent', () => {
  let component: SitemachinedailogComponent;
  let fixture: ComponentFixture<SitemachinedailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitemachinedailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemachinedailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
