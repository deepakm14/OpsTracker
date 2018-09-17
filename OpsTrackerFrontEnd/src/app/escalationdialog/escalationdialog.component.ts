import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import { Escalation } from '../models/escalation.model';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-escalationdialog',
  templateUrl: './escalationdialog.component.html',
  styleUrls: ['./escalationdialog.component.css']
})
export class EscalationdialogComponent implements OnInit {
  private toasterService: ToasterService;
  isLoadingResults = false;
  constructor(public thisdialogRef: MatDialogRef<EscalationdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient,toasterService:ToasterService) { 
    this.toasterService=toasterService;
  }

  ngOnInit() {
    this.thisdialogRef.updateSize('27%', '20%');
  }

  updateEscalation()
  {
    console.log(this.data);
    
    this.isLoadingResults = true;
    this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/esctype', this.data)
    
      .subscribe(  (data:any) => { 
        if(data['status']=='success'){
          this.isLoadingResults = false;
          this.thisdialogRef.close();
          this.toasterService.pop('success','Successfully Updated' ,'');
        } else {
          this.isLoadingResults = false;
          this.thisdialogRef.close();
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
