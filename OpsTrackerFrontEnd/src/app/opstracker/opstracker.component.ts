import { Component, OnInit, Injectable } from '@angular/core';
import {FormControl,NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';
import { Site } from '../models/site.model';
import { Project } from '../models/project.model';
import { ManPowerTransaction } from '../models/manpowertransaction.model';
import { ManPower } from '../models/manpower.model';
import { Material } from '../models/material.model';
import { Machine } from '../models/machine.model';
import { MaterialDate } from '../models/materialdate.model';
import { MaterialTransaction } from '../models/materialtransaction.model';
import { MachineTransaction } from '../models/machinetransaction.model';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import {map, startWith ,switchMap,catchError} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Dateformat } from '../dateformat.service';
import { Projectsite } from '../models/projectsite.model';
import { MatOptionSelectionChange } from '@angular/material';
import { ViewChild,ElementRef,Renderer} from '@angular/core';

@Component({
  selector: 'app-opstracker',
  templateUrl: './opstracker.component.html',
  styleUrls: ['./opstracker.component.css']
})


export class OpstrackerComponent implements OnInit {
  @ViewChild('myForm1') public opstracfrm: NgForm;
  @ViewChild('myForm2') public opstracmatfrm: NgForm;
  @ViewChild('myForm2') public opstracmacfrm: NgForm;
  private toasterService: ToasterService;
  //Constructor call
  constructor(private data: DataService, private http: HttpClient,private dateFormat: Dateformat ,toasterService:ToasterService){
    this.toasterService=toasterService; }

  myControl = new FormControl();
  isLoadingResults = false;
  actualgreater= false;
  shortfallgreater= false;
  //model class object creation
  project = new Project();
  site = new Site();
  manpowertransaction= new ManPowerTransaction();
  materialtrans= new MaterialTransaction();
  public matt={};
  machinetransaction= new MachineTransaction();
  manpower= new ManPower();
  material= new Material();
  machine= new Machine();
  private currentdate:string;
 private Totalofreleivers:number;
 private commitmentDate:any;
 private IndentSubmissionDate:any;
 projectsite = new Projectsite();

  //Dropdown options declaration
  Matstatus: string[] = ['Delayed', 'Complaint','Pending'];
  machinestatus: string[] = ['Working','Not Working'];
  machinetypes = [];
  equipmenttypes = [];
  materialtypes =[];

  //variable declation
  
  projects: Object;
  sites: Object;
  manpowers: Array<ManPower>;
  materials: Array<Material>;
  machines: Array<Machine>;
  shift: string;
  time = [];
  message: string;
  shifts = [];
  
  clearFormArray=[];
  value: number;
  id;
  
  ops_client = new FormControl('', [Validators.required]);
  ops_site = new FormControl('', [Validators.required]);
  ops_shift = new FormControl('', [Validators.required]);
  ops_planned = new FormControl('', [Validators.required]);
  ops_actual = new FormControl('', [Validators.required]);
  ops_shortfall = new FormControl('', [Validators.required]);

  ops_mattype = new FormControl('', [Validators.required]);
  ops_cdate = new FormControl('', [Validators.required]);
  ops_isubdate = new FormControl('', [Validators.required]);
  ops_msupdate = new FormControl('', [Validators.required]);
  ops_usupdate = new FormControl('', [Validators.required]);
  ops_status = new FormControl('', [Validators.required]);

  ops_mactype = new FormControl('', [Validators.required]);
  ops_esttype = new FormControl('', [Validators.required]);
  ops_modelno = new FormControl('', [Validators.required]);
  ops_serno = new FormControl('', [Validators.required]);
  ops_status1 = new FormControl('', [Validators.required]);
  ops_comraidate = new FormControl('', [Validators.required]);
  ops_resdate = new FormControl('', [Validators.required]);

  getops_clientErrorMessage() {
    return this.ops_client.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_siteErrorMessage() {
    return this.ops_site.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_shiftErrorMessage() {
    return this.ops_shift.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_plannedErrorMessage() {
    return this.ops_planned.hasError('required') ? 'You must enter a value' :'';      
  }

  getops_actualErrorMessage() {
    return this.ops_actual.hasError('required') ? 'You must enter a value' :'';      
  }

  getops_shortfallErrorMessage() {
    return this.ops_shortfall.hasError('required') ? 'You must enter a value' :'';      
  }

  getops_mattypeErrorMessage() {
    return this.ops_mattype.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_cdateErrorMessage() {
    return this.ops_cdate.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_isubdateErrorMessage() {
    return this.ops_isubdate.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_msupdateErrorMessage() {
    return this.ops_msupdate.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_usupdateErrorMessage() {
    return this.ops_usupdate.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_statusErrorMessage() {
    return this.ops_status.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_mactypeErrorMessage() {
    return this.ops_mactype.hasError('required') ? 'You must enter a value' :'';      
  }

  getops_esttypeErrorMessage() {
    return this.ops_esttype.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_sernoErrorMessage() {
    return this.ops_serno.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_modelnoErrorMessage() {
    return this.ops_modelno.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_status1ErrorMessage() {
    return this.ops_status1.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_comraidateErrorMessage() {
    return this.ops_comraidate.hasError('required') ? 'You must enter a value' :'';      
  }
  getops_resdateErrorMessage() {
    return this.ops_resdate.hasError('required') ? 'You must enter a value' :'';      
  }
setCurrentdate(){
  const now = new Date();
  this.currentdate=this.dateFormat.convertdate(now);
  this.manpowertransaction.submitDate=now;

  
  console.log(this.manpowertransaction.submitDate);

}

  setStatus(status:string){
    this.materialtrans.status=status;
    
  }
  //function call
  listClients()
  {
    this.data.getProjects().subscribe(
      data => this.projects = data      
    );
    console.log(this.data);
  }

 

  listSites()
  {
    this.data.getSites().subscribe(
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
   this.data.getProjectsite(id).subscribe(  (data:any) => { 
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
  setSitefromprojectid(id:number){
    this.data.getProjectsite(id).subscribe(
    
      data => this.projectsite = data
    );
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
   
     this.data.getSite(id).subscribe(
       data => {
        this.shifts.length=0;
         this.site = data;
         this.manpowers = this.site.manPowerDTO;
         this.manpowers.forEach(i =>{
         this.manpower = i;
       
         this.shifts.push(this.manpower.startTime + "-" + this.manpower.endTime);
         
         console.log(this.shifts);
         })
         this.setMaterial();
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
      this.manpowertransaction.planned = this.manpower.planned;
      this.manpowertransaction.shiftTime = shift;
      this.manpowertransaction.siteId = this.site.id;
      this.manpowertransaction.projectId = this.project.id;
    }
    })
    console.log(this.manpowertransaction);
    this.time = [];
    this.shift ="";
    console.log("time" + shift);
  }
   }

   setShortFall(value: number)
   {
     console.log(value);
     this.manpowertransaction.actual = value;
     this.manpowertransaction.shortfall = this.manpowertransaction.planned - this.manpowertransaction.actual;
     if(this.manpowertransaction.actual>this.manpowertransaction.planned){
      this.actualgreater=true;
     }else {
      this.actualgreater=false;
     }
   }
   setRemarks(value: string){
    this.materialtrans.remarks=value;


   }
   setSupplydate(value: string){
    this.materialtrans.uniformSupplyDate=value;


   }
   setRelievers1(value: number){
    this.manpowertransaction.continuedWithOutOt=value;
this.shortfallgreater=false;

   }
   setRelievers2(value: number){
    this.manpowertransaction.continuedWithOt=value;
this.shortfallgreater=false;

   }
   setRelievers3(value: number){
    this.manpowertransaction.newComer=value;
this.shortfallgreater=false;

   }
  setMaterial(){
     this.materials = this.site.materialDTO;
     this.materialtypes.length = 0;
     this.materials.forEach(i =>{
       this.material = i;
       this.materialtypes.push(this.material.materialType);
       console.log(this.materialtypes);
       this.setMachine();
       })
       
  }
         
setCommitmentdate(event: MatOptionSelectionChange,Commitdate:string){
  if (event.source.selected) {
  this.materials.forEach(i =>{
    this.material = new Material();
    this.material = i;
    console.log(Commitdate);
    console.log(Commitdate);
    if(Commitdate == this.material.materialType){
console.log(Commitdate);
console.log(this.material.commitmentDate);
this.commitmentDate=this.material.commitmentDate;
this.commitmentDate=this.material.commitmentDate;
      this.commitmentDate=this.material.commitmentDate;
      this.materialtrans.indentSubmissionDate=this.materialtrans.indentSubmissionDate;
      this.materialtrans.commitmentDate=this.commitmentDate;
      this.materialtrans.siteId = this.site.id;
      this.materialtrans.projectId = this.project.id;
    }
   
    })
  }
}

  setMachine(){
     this.machinetypes.length = 0;
    this.machines = this.site.machineDTO;
    this.machines.forEach(i =>{
      this.machine = i;
      
      this.machinetypes.push(this.machine.machineType);
      console.log(this.machinetypes);
    })
  }

  setEquipment(event: MatOptionSelectionChange,type){
  
   
       if (event.source.selected) {
          this.machinetransaction.machineType = type;
    this.machines.forEach(i =>{
       this.machine = new Machine();
    
      this.machine = i;
      if(this.machine.machineType == type){
      this.machinetransaction.equipmentType = this.machine.equipmentType;
      this.machinetransaction.modelNo = this.machine.modelNo;
      this.machinetransaction.serialNo = this.machine.serialNo;
       this.machinetransaction.siteId = this.site.id;
      this.machinetransaction.projectId = this.project.id;
      }
    })
    console.log(this.machinetransaction);
  }
  }
  setMachineStatus(status){
    this.machinetransaction.status = status;
  }


  postManPowerTransaction()
  {
    this.isLoadingResults = true;
    console.log(this.manpowertransaction);
    console.log("hi");
    
      this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/manpower',this.manpowertransaction)
      .subscribe(  (data:any) => { 
        console.log(data['status']);
        if(data['status']=='success'){
          this.isLoadingResults = false;
          this.opstracfrm.reset();
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

postMaterialTransaction()
{
  const now = new Date();
  this.materialtrans.submitDate=now;
  console.log(now);
  console.log(this.materialtrans);
  this.isLoadingResults = true;
    this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/material',this.materialtrans)
    .subscribe(  (data:any) => { 
      console.log(data['status']);
      if(data['status']=='success'){
        this.isLoadingResults = false;
        this.opstracmatfrm.reset();
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

postMachineTransaction()
{
  const now = new Date();
   this.machinetransaction.submitDate=now;
  console.log(this.machinetransaction);
  this.isLoadingResults = true;
  this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/machine', this.machinetransaction)
  .subscribe(  (data:any) => { 
    console.log(data);
    if(data['status']=='success'){
      this.isLoadingResults = false;
      this.opstracmacfrm.reset();
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
    this.listClients();
    this.listSites();
    this.setCurrentdate();
  }

}
