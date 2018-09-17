import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import { Site } from '../models/site.model';
import {DataService} from '../data.service';
import { Employ } from '../models/employ.model';
import { MaterialTransaction } from '../models/materialtransaction.model';
import { MatOptionSelectionChange } from '@angular/material';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import {map, startWith ,switchMap,catchError} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Dateformat } from '../dateformat.service';
import { Projectsite } from '../models/projectsite.model';
import { Material } from '../models/material.model';
import { Project } from '../models/project.model';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-opstrackermaterialdialog',
  templateUrl: './opstrackermaterialdialog.component.html',
  styleUrls: ['./opstrackermaterialdialog.component.css']
})
export class OpstrackermaterialdialogComponent implements OnInit {
private toasterService: ToasterService;
Matstatus: string[] = ['Delayed', 'Complaint','Pending'];
  constructor(public thisdialogRef: MatDialogRef<OpstrackermaterialdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private data1: DataService, private http: HttpClient,private dateFormat: Dateformat,toasterService:ToasterService) {
    this.toasterService=toasterService;
   }
myControl = new FormControl();
project = new Project();
  isLoadingResults = false;
   materialtrans= new MaterialTransaction();
   material= new Material();
   private currentdate:string;
 
 private commitmentDate:any;
 private IndentSubmissionDate:any;
  materialtypes =[];
  materials: Array<Material>;
    id;
     projectsite = new Projectsite();
sites: Object;
projects: Object;
 site = new Site();
    setCurrentdate(){
  const now = new Date();
  this.currentdate=this.dateFormat.convertdate(now);
  this.data.submitDate=now;

  
  

}

setStatus(status:string){
    this.data.status=status;
    
  }
listClients()
  {
    this.data1.getProjects().subscribe(
      data => this.projects = data      
    );
    console.log(this.data);
  }
listSites()
  {
    this.data1.getSites().subscribe(
      data => this.sites = data 
    );
    console.log(this.data);
  }
  setProject(event: MatOptionSelectionChange,id:number)
  {
    this.isLoadingResults = true;
    console.log(id);
    this.project.id = id;
    //console.log(this.project); 
    if (event.source.selected) {
      console.log(id);
   // this.setSitefromprojectid(id);
   this.data1.getProjectsite(id).subscribe(  (data:any) => { 
   this.projectsite=data;
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
  }


 setSite(event: MatOptionSelectionChange,siteid)
  {
    
     console.log(siteid);
     this.id = siteid; 
     console.log(this.project);
     if (event.source.selected) {
   
      this.setMaterial(siteid);
     }
  }
setRemarks(value: string){
    this.data.remarks=value;


   }
   setSupplydate(value: string){
    this.data.uniformSupplyDate=value;


   }
   setMaterial(id:number){
    this.data1.getSite(id).subscribe(
      data => {
    this.materialtypes.length = 0;
    this.site = data;
   
     this.materials = this.site.materialDTO;
     console.log(this.materials);
     this.materials.forEach(i =>{
       this.material = i;
       this.materialtypes.push(this.material.materialType);
       console.log(this.materialtypes);
     
       })
      }
      );
    }


  setCommitmentdate(event: MatOptionSelectionChange,Commitdate:string){
  if (event.source.selected) {
  this.materials.forEach(i =>{
    this.material = new Material();
    this.material = i;
    console.log(this.material.materialType);
    console.log(Commitdate);
    if(Commitdate == this.material.materialType){

//this.commitmentDate=this.material.commitmentDate;
//this.commitmentDate=this.data.commitmentDate;
      this.commitmentDate=this.data.commitmentDate;
      this.data.indentSubmissionDate=this.data.indentSubmissionDate;
      this.data.commitmentDate=this.material.commitmentDate;
      this.data.siteId = this.site.id;
      this.data.projectId = this.project.id;
    }
   
    })
  }
}

updateMaterialTransaction()
{
  const now = new Date();
  this.data.submitDate=now;
  console.log(now);
  console.log(this.data);
  this.isLoadingResults = true;
    this.http.put('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/material/update',this.data)
    .subscribe(  (data:any) => { 
      console.log(data['status']);
      if(data['status']=='success'){
        this.isLoadingResults = false;
        this.thisdialogRef.close();
        this.toasterService.pop('success','Successfully Submitted' ,'');
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
        this.toasterService.pop('warning','Not Submitted' ,'');
        this.isLoadingResults = false;
        
           console.log('Backend returned status code: ', err.status);
           console.log('Response body:', err.error);
       }
    }
   );
    
}
  ngOnInit() {
    this.thisdialogRef.updateSize('70%', '90%');
  this.listClients();
    this.listSites();
    this.setCurrentdate();
  }

  onCloseConfirm() {
this.thisdialogRef.close('Confirm');
  }

  onCloseCancel() {
this.thisdialogRef.close('Cancel');
  }

}

