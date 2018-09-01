import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemanpowerdialogComponent } from './sitemanpowerdialog.component';

describe('SitemanpowerdialogComponent', () => {
  let component: SitemanpowerdialogComponent;
  let fixture: ComponentFixture<SitemanpowerdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitemanpowerdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemanpowerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
