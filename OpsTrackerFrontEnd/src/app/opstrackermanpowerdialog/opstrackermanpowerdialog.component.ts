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


@Component({
  selector: 'app-opstrackermanpowerdialog',
  templateUrl: './opstrackermanpowerdialog.component.html',
  styleUrls: ['./opstrackermanpowerdialog.component.css']
})
export class OpstrackermanpowerdialogComponent implements OnInit {
   private toasterService: ToasterService;
  constructor(public thisdialogRef: MatDialogRef<OpstrackermanpowerdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private dateFormat: Dateformat,private data1: DataService, private http: HttpClient,toasterService:ToasterService) { 
    this.toasterService=toasterService;
  }
private currentdate:string;
isLoadingResults = false;
 actualgreater= false;
  shortfallgreater= false;
  site = new Site();
   project = new Project();
   manpower= new ManPower();
   manpowers: Array<ManPower>;
    shift: string;
     shifts = [];
      time = [];
     projects: Object;
     projectsite = new Projectsite();
      id;
      sites: Object;
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
    this.shifts.length=0;
     console.log(siteid);
     this.id = siteid; 
     console.log(this.project);
     if (event.source.selected) {
     this.setManPower(siteid);
     }
  }

setManPower(id:number)
   {
   
     this.data1.getSite(id).subscribe(
       data => {
        this.shifts.length=0;
         this.site = data;
         this.manpowers = this.site.manPowerDTO;
         this.manpowers.forEach(i =>{
         this.manpower = i;
       
         this.shifts.push(this.manpower.startTime + "-" + this.manpower.endTime);
         
         console.log(this.shifts);
         })
        // this.setMaterial();
        }
     );
   }

  setShiftDetails(event: MatOptionSelectionChange,shift)
   {
    if (event.source.selected) {
     this.shift = shift;
    console.log("shift" + shift);
    //this.time.push(shift.split('-'));
    //console.log("time" + this.time);
    this.manpowers.forEach(i =>{
      this.manpower = new ManPower();
      this.manpower = i;   
      //console.log(this.time[0] == this.manpower.startTime + "," +this.manpower.endTime);   
      //if(this.time[0] == this.manpower.startTime + "," +this.manpower.endTime)
      if(this.shift == this.manpower.startTime + "-" +this.manpower.endTime)
    {
      this.data.planned = this.manpower.planned;
      this.data.shiftTime = shift;
      this.data.siteId = this.site.id;
      this.data.projectId = this.project.id;
    }
    })
   
    this.time = [];
    this.shift ="";
    console.log("time" + shift);
  }
   }
    setShortFall(value: number)
   {
     console.log(value);
     this.data.actual = value;
     this.data.shortfall = this.data.planned - this.data.actual;
     if(this.data.actual>this.data.planned){
      this.actualgreater=true;
     }else {
      this.actualgreater=false;
     }
   }


   setRelievers1(value: number){
    this.data.continuedWithOutOt=value;
this.shortfallgreater=false;

   }
   setRelievers2(value: number){
    this.data.continuedWithOt=value;
this.shortfallgreater=false;

   }
   setRelievers3(value: number){
    this.data.newComer=value;
this.shortfallgreater=false;

   }
updateManPowerTransaction()
  {
    this.isLoadingResults = true;
    console.log(this.data);
    console.log("hi");
    
      this.http.put('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/manpower/update',this.data)
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