import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Toolbarservice } from './my-nav/my-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css'],
  providers: [Toolbarservice]
})
export class AppComponent {
  title = 'udswebproject';

  constructor(private activaterouter: ActivatedRoute, private router: Router , public nav: Toolbarservice) {
     /*  if (this.router.url === '/masterdata') {
        this.nav.visible = false;

 } */

  }

}
