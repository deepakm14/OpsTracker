import { Component, HostBinding, OnInit } from '@angular/core';
import {FormControl,NgForm,Validators} from '@angular/forms';
import { Toolbarservice } from '../my-nav/my-nav.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Login } from '../models/login.model';
import { ViewChild,ElementRef,Renderer} from '@angular/core';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Toolbarservice]
})
export class LoginComponent implements OnInit {
  private toasterService: ToasterService;
  isLoadingResults = false;
  loginfailure = false;
  @ViewChild('myForm1') public clientfrm: NgForm;
  myControl = new FormControl();
  constructor(private activaterouter: ActivatedRoute, private router: Router, public nav: Toolbarservice,private http: HttpClient,toasterService:ToasterService,) 
  { 
    this.toasterService=toasterService;
  }
  login = new Login();
  user_name = new FormControl('', [Validators.required]);
  pass_ward = new FormControl('', [Validators.required]);
  getUsernameErrorMessage() {
    return this.user_name.hasError('required') ? 'You must enter a value' :'';      
  }
  getPasswordErrorMessage() {
    return this.pass_ward.hasError('required') ? 'You must enter a value' :'';      
  }
  ngOnInit() {


  }

  onButtonclick(): void {

    this.router.navigate(['/masterdata']);


  }

  onlogin(){
    this.isLoadingResults = true;
    //console.log(this.data);
    this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/user/'+this.login.userName+'/'+this.login.passWord)
    
      .subscribe(  (data:any) => { 
        if(data['status']=='success'){
          this.isLoadingResults = false;
          this.loginfailure = false;
          this.router.navigate(['/masterdata']);
       //   this.toasterService.pop('success','Successfully ' ,'');
        } else {
          this.isLoadingResults = false;
          this.loginfailure = true;
        //  this.toasterService.pop('warning','Not ' ,'');
        }
     
      
     },
     (err: HttpErrorResponse) => {
         if (err.error instanceof Error) {
          this.isLoadingResults = false;
         
             console.log('An error occurred:', err.error.message);
         } else {
         
          this.isLoadingResults = false;
          
             console.log('Backend returned status code: ', err.status);
             console.log('Response body:', err.error);
             console.log('Response body:', err.error['message']);
            
         }
      }
     );  

  }

}
