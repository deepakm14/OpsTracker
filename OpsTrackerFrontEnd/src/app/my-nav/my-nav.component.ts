import { Component , HostBinding, OnInit } from '@angular/core';
import { Toolbarservice } from './my-nav.service';
import {ActivatedRoute, Router} from '@angular/router';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({

  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
  providers: [Toolbarservice]
})
export class MyNavComponent implements OnInit {
  @HostBinding('class.is-open')
  showSubmenu = false;
  isOpen = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public nav: Toolbarservice,  private router: Router ) {
console.log(this.router.url);
  }
  ngOnInit() {

  }
  }
