import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteviewComponent } from './siteview.component';

describe('SiteviewComponent', () => {
  let component: SiteviewComponent;
  let fixture: ComponentFixture<SiteviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
