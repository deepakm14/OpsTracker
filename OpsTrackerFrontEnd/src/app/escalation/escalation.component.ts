import { Component, OnInit } from '@angular/core';
import {FormControl,NgForm, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {Escalation} from '../models/escalation.model';
import { HttpClient } from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Dateformat } from '../dateformat.service';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewChild,ElementRef,Renderer} from '@angular/core';

@Component({
  selector: 'app-escalation',
  templateUrl: './escalation.component.html',
  styleUrls: ['./escalation.component.css']
})
export class EscalationComponent implements OnInit {
  @ViewChild('myForm') public mainescalfrm: NgForm;
  private toasterService: ToasterService;
  communicatedvia: string[] = ['Phone', 'Email'];
  myControl = new FormControl();
  escalation$: Object;
  private communicatedate:string;
  private closuredate:string;
  private estclosuredate:string;
  //esc2:Escalation[] = [];
  //public esc2={"typeOfEscalation":"","ommunicatedVia":""};
  esc2 = new Escalation();
  private newAttribute: any = {};
  isLoadingResults = false;
  constructor(private data: DataService, private http: HttpClient,private dateFormat: Dateformat ,toasterService:ToasterService){
    this.toasterService=toasterService;
  }
  esc_type = new FormControl('', [Validators.required]);
  esc_des = new FormControl('', [Validators.required]);
  esc_comm = new FormControl('', [Validators.required]);
  esc_to = new FormControl('', [Validators.required]);
  esc_by = new FormControl('', [Validators.required]);
  esc_sta = new FormControl('', [Validators.required]);
  esc_cdate = new FormControl('', [Validators.required]);
  esc_ecdate = new FormControl('', [Validators.required]);

  getEsctypeErrorMessage() {
    return this.esc_type.hasError('required') ? 'You must enter a value' :'';      
  }
  getEscdesErrorMessage() {
    return this.esc_des.hasError('required') ? 'You must enter a value' :'';      
  }
  getEsccommErrorMessage() {
    return this.esc_comm.hasError('required') ? 'You must enter a value' :'';      
  }
  getEsctoErrorMessage() {
    return this.esc_to.hasError('required') ? 'You must enter a value' :'';      
  }
  getEscbyErrorMessage() {
    return this.esc_by.hasError('required') ? 'You must enter a value' :'';      
  }
  getEscstaErrorMessage() {
    return this.esc_sta.hasError('required') ? 'You must enter a value' :'';      
  }

  getEsccdateErrorMessage() {
    return this.esc_cdate.hasError('required') ? 'You must enter a value' :'';      
  }

  getEscecdateErrorMessage() {
    return this.esc_ecdate.hasError('required') ? 'You must enter a value' :'';      
  }


  setEscalationtype(id:string)
  {
    console.log(id);
    this.esc2.typeOfEscalation = id;
  }

  setCommunicatedvia(id:string)
  {
    console.log(id);
    this.esc2.communicatedVia = id;
  }

postEscalationtracker(){

/* this.communicatedate=this.dateFormat.convertdate(this.esc2.communicatedDate);
this.estclosuredate=this.dateFormat.convertdate(this.esc2.estimatedClosureDate);
this.closuredate=this.dateFormat.convertdate(this.esc2.closureDate);
this.esc2.communicatedDate=this.communicatedate;
this.esc2.estimatedClosureDate=this.estclosuredate;
this.esc2.closureDate=this.closuredate; */

  this.isLoadingResults = true;
   
  this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/escalation', this.esc2)
  .subscribe(  (data:any) => { 
    console.log(data['status']);
    if(data['status']=='success'){
      this.isLoadingResults = false;
      this.mainescalfrm.reset();
      this.toasterService.pop('success','Successfully Submitted' ,'');
    } else {
      this.isLoadingResults = false;
      this.toasterService.pop('warning','Not Submitted' ,'');
    }
 
  
 },
 (err: HttpErrorResponse) => {
     if (err.error instanceof Error) {
      this.isLoadingResults = false;
     
         console.log('An error occurred:', err.error.message);
     } else {
      this.toasterService.pop('warning','Not Submitted' ,'');
      this.isLoadingResults = false;
      
         console.log('Backend returned status code: ', err.status);
         console.log('Response body:', err.error);
     }
  }
 );

  }

  ngOnInit() {
    this.data.getEscalation().subscribe(
      data => this.escalation$ = data
    );
  }

}
