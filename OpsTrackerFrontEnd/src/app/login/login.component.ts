import { Component, HostBinding, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Toolbarservice } from '../my-nav/my-nav.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Toolbarservice]
})
export class LoginComponent implements OnInit {
  myControl = new FormControl();
  constructor(private activaterouter: ActivatedRoute, private router: Router, public nav: Toolbarservice) { }

  ngOnInit() {


  }

  onButtonclick(): void {

    this.router.navigate(['/masterdata']);


  }

}
