import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import { Client } from '../models/client.model';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-clientdialog',
  templateUrl: './clientdialog.component.html',
  styleUrls: ['./clientdialog.component.css']
})
export class ClientdialogComponent implements OnInit {

  private toasterService: ToasterService;
isLoadingResults = false;
  constructor(public thisdialogRef: MatDialogRef<ClientdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private http: HttpClient,toasterService:ToasterService) {
    this.toasterService=toasterService;
   }

  ngOnInit() {
    this.thisdialogRef.updateSize('27%', '33%');
  }

  updateClient()
  {
    //console.log(this.emp);
    
    this.isLoadingResults = true;
    this.http.put('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/project/update', this.data)
    
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
