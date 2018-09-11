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
  selector: 'app-employdialog',
  templateUrl: './employdialog.component.html',
  styleUrls: ['./employdialog.component.css']
})
export class EmploydialogComponent implements OnInit {
public emp1: Employ;
private toasterService: ToasterService;
isLoadingResults = false;
Designation: Array<any> = [{'id':'1','name':'REGIONAL MANAGER'},{'id':'2','name':'SENIOR MANAGER'},{'id':'3','name':'SITE INCHARGE'},{'id':'4','name':'ASSISTANT SENIOR MANAGER'}];
  constructor(public thisdialogRef: MatDialogRef<EmploydialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient,toasterService:ToasterService) {
    this.toasterService=toasterService;

   }

  ngOnInit() {
    this.thisdialogRef.updateSize('27%', '60%');
  }
  setDesignation(id)
  {
    console.log(id);
    this.data.designation = id;
  }
  updateEmployee()
  {
    console.log(this.data);
    
    this.isLoadingResults = true;
    this.http.put('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee/update', this.data)
    
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
