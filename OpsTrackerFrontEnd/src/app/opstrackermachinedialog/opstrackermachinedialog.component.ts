import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import { Employ } from '../models/employ.model';
import { ManPower } from '../models/manpower.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Dateformat } from '../dateformat.service';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { Site } from '../models/site.model';
import { MatOptionSelectionChange } from '@angular/material';
import { Project } from '../models/project.model';
import { Projectsite } from '../models/projectsite.model';
import { Machine } from '../models/machine.model';
import { MachineTransaction } from '../models/machinetransaction.model';

@Component({
  selector: 'app-opstrackermachinedialog',
  templateUrl: './opstrackermachinedialog.component.html',
  styleUrls: ['./opstrackermachinedialog.component.css']
})
export class OpstrackermachinedialogComponent implements OnInit {
 
  private toasterService: ToasterService;
  constructor(public thisdialogRef: MatDialogRef<OpstrackermachinedialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private dateFormat: Dateformat,private data1: DataService, private http: HttpClient,toasterService:ToasterService) {
    this.toasterService=toasterService;
   }
   machinestatus: string[] = ['Working','Not Working'];
   private currentdate:string;
   isLoadingResults = false;
    actualgreater= false;
     shortfallgreater= false;
     site = new Site();
      project = new Project();
      projects: Object;
      projectsite = new Projectsite();
       id;
       sites: Object;
       machinetypes = [];
       machine= new Machine();
       machinetransaction= new MachineTransaction();
       machines: Array<Machine>;

   setCurrentdate(){
    const now = new Date();
    this.currentdate=this.dateFormat.convertdate(now);
    this.data.submitDate=now;
     
    console.log(this.data.submitDate);
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
      this.setMachine(siteid);
     }
  }
  
  setMachine(id:number){
    this.data1.getSite(id).subscribe(
      data => {
    this.machinetypes.length = 0;
    this.site = data;
    console.log(this.site.machineDTO);
   this.machines = this.site.machineDTO;
   this.machines.forEach(i =>{
     this.machine = i;
     
     this.machinetypes.push(this.machine.machineType);
     console.log(this.machinetypes);
   })
  }
);
}

 setEquipment(event: MatOptionSelectionChange,type){
  
   
  if (event.source.selected) {
     this.machinetransaction.machineType = type;
this.machines.forEach(i =>{
  this.machine = new Machine();

 this.machine = i;
 if(this.machine.machineType == type){
 this.data.equipmentType = this.machine.equipmentType;
 this.data.modelNo = this.machine.modelNo;
 this.data.serialNo = this.machine.serialNo;
  this.data.siteId = this.site.id;
 this.data.projectId = this.project.id;
 }
})
console.log(this.machinetransaction);
}
}
setMachineStatus(status){
this.data.status = status;
}

  updateMachineTransaction()
  {
    this.isLoadingResults = true;
    console.log(this.data);
    console.log("hi");
    
      this.http.put('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/machine/update',this.data)
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
