import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from '../data.service';
import {Escalation} from '../models/escalation.model';
import { HttpClient } from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Dateformat } from '../dateformat.service';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-escalation',
  templateUrl: './escalation.component.html',
  styleUrls: ['./escalation.component.css']
})
export class EscalationComponent implements OnInit {
  private toasterService: ToasterService;
  communicatedvia: string[] = ['Phone', 'Email'];
  myControl = new FormControl();
  escalation$: Object;
  //esc2:Escalation[] = [];
  //public esc2={"typeOfEscalation":"","ommunicatedVia":""};
  esc2 = new Escalation();
  private newAttribute: any = {};
  isLoadingResults = false;
  constructor(private data: DataService, private http: HttpClient,private dateFormat: Dateformat ,toasterService:ToasterService){
    this.toasterService=toasterService;
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

this.esc2.communicatedDate=this.dateFormat.convertdate(this.esc2.communicatedDate);
this.esc2.estimatedClosureDate=this.dateFormat.convertdate(this.esc2.estimatedClosureDate);
this.esc2.closureDate=this.dateFormat.convertdate(this.esc2.closureDate);

  this.isLoadingResults = true;
   
  this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/escalation', this.esc2)
  .subscribe(  (data:any) => { 
    console.log(data['status']);
    if(data['status']=='success'){
      this.isLoadingResults = false;
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
