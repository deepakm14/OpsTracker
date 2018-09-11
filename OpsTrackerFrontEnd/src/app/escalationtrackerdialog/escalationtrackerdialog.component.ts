import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import { Employ } from '../models/employ.model';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-escalationtrackerdialog',
  templateUrl: './escalationtrackerdialog.component.html',
  styleUrls: ['./escalationtrackerdialog.component.css']
})
export class EscalationtrackerdialogComponent implements OnInit {
  private toasterService: ToasterService;
  isLoadingResults = false;
  escalation$: Object;
  communicatedvia: string[] = ['Phone', 'Email'];
  constructor(public thisdialogRef: MatDialogRef<EscalationtrackerdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient,toasterService:ToasterService,private data1: DataService,) { 
    this.toasterService=toasterService;

  }

  setEscalationtype(id:string)
  {
    console.log(id);
    this.data.typeOfEscalation = id;
  }

  setCommunicatedvia(id:string)
  {
    console.log(id);
    this.data.communicatedVia = id;
  }

  ngOnInit() {
    this.thisdialogRef.updateSize('70%', '90%');
    this.isLoadingResults = true;
    this.data1.getEscalation().subscribe((data:any) => { 
      this.escalation$ = data;
         this.isLoadingResults = false;
        
    
     
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

       updateTrackerEscalation()
       {
         //console.log(this.emp);
         
         this.isLoadingResults = true;
         this.http.put('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/escalationupdate', this.data)
         
           .subscribe(  (data:any) => { 
             if(data['status']=='success'){
               this.isLoadingResults = false;
               this.toasterService.pop('success','Successfully Updated' ,'');
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
              
               this.isLoadingResults = false;
               
                  console.log('Backend returned status code: ', err.status);
                  console.log('Response body:', err.error);
                  console.log('Response body:', err.error['message']);
                 
              }
           }
          );
       }


  onCloseConfirm() {
    this.thisdialogRef.close('Confirm');
      }
    
      onCloseCancel() {
    this.thisdialogRef.close('Cancel');
      }
    
}
