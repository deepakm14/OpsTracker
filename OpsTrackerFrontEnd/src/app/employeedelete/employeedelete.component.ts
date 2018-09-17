import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';

import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employeedelete',
  templateUrl: './employeedelete.component.html',
  styleUrls: ['./employeedelete.component.css']
})
export class EmployeedeleteComponent implements OnInit {

  private toasterService: ToasterService;
isLoadingResults = false;
  constructor(public thisdialogRef: MatDialogRef<EmployeedeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private http: HttpClient,toasterService:ToasterService,private router: Router) {
    this.toasterService=toasterService;
   }

  ngOnInit() {
    this.thisdialogRef.updateSize('21%', '20%');
  }

  deleteEmployee(){
    this.isLoadingResults = true;
    console.log(this.data);
    this.http.delete('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee/delete/'+ this.data)
    
      .subscribe(  (data:any) => { 
        if(data['status']=='success'){
          this.isLoadingResults = false;
          this.thisdialogRef.close();
          this.toasterService.pop('success','Successfully Deleted' ,'');
          this.router.navigate(['/masterdata']);
        } else {
          this.isLoadingResults = false;
          this.thisdialogRef.close();
          this.toasterService.pop('warning','Not Deleted' ,'');
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
