import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Toolbarservice } from '../my-nav/my-nav.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Dateformat } from '../dateformat.service';
import {map, startWith ,switchMap,catchError} from 'rxjs/operators';
import {DataService} from '../data.service';
import { Site } from '../models/site.model';
import { ManPower } from '../models/manpower.model';
import { Material } from '../models/material.model';
import { Machine } from '../models/machine.model';
import { Observable, of } from 'rxjs';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';






@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css'],
 
  providers: [Toolbarservice]
})
export class MasterdataComponent implements OnInit {
  
  private toasterService: ToasterService;
  //model class object creation
  site = new Site();
  manpower = new ManPower();
  material = new Material();
  machine = new Machine();


  //Dropdown values declaration
  date;
  myControl1 = new FormControl();
  Equipmenttype: string[] = ['Rented', 'Amortised'];
  Contracttype: string[] = ['Manpower', 'Lumsum', 'SLA' , 'One Time', 'Project Event' , 'PartTimers'];
  Materialtype: string[] = ['Fixed materials', 'At Actual'];
  Designation: Array<any> = [{'id':'1','name':'REGIONAL MANAGER'},{'id':'2','name':'SENIOR MANAGER'},{'id':'3','name':'SITE INCHARGE'},{'id':'4','name':'ASSISTANT SENIOR MANAGER'}];

  constructor(private http: HttpClient, private activaterouter: ActivatedRoute, private router: Router, public nav: Toolbarservice, private data: DataService,
    private dateFormat: Dateformat,toasterService:ToasterService){
      this.toasterService=toasterService;
    }
    public config: ToasterConfig =new ToasterConfig({positionClass: 'toast-center'});
popToast(){
  
  this.toasterService.pop('success','Args Title' ,'Arg Body');
}

numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;

}



 isLoadingResults = false;
  private fieldArray: Array<any> = [];
  private fieldArray1: Array<any> = [];
  private fieldArray2: Array<any> = [];
  private newAttribute: any = {};
  private newAttribute1: any = {};
  private newAttribute2: any = {};
  matadded = false;
  manadded = false;
  macadded = false;

  date1: string;

  setMaterialType(type){
    this.material.materialType = type;
    console.log(type);
  }


  addmanFieldValue() {
    this.manadded = true;
   //this.date=new Date();
      this.fieldArray.push(this.manpower);
      console.log(this.fieldArray);
      this.manpower = new ManPower();
  }

  deletemanFieldValue(index) {
   
      this.fieldArray.splice(index, 1);
      if (this.fieldArray.length < 1) {
      this.manadded = false;
      }
  }


  addmatFieldValue() {
    this.matadded = true;
    //console.log(this.material);
    //this.material.commitmentDate = this.dateFormat.convertdate(this.material.commitmentDate);
    console.log(this.material.commitmentDate);
    this.fieldArray1.push(this.material);
    //console.log(this.fieldArray1);
    this.material = new Material();
  }

  deletematFieldValue(index) {
   
      this.fieldArray1.splice(index, 1);
      if (this.fieldArray1.length < 1) {
      this.matadded = false;
      }
  }

  addmacFieldValue() {
    this.macadded = true;
      this.fieldArray2.push(this.machine);
      console.log(this.fieldArray2);
      this.machine = new Machine();
  }

  deletemacFieldValue(index) {
   
      this.fieldArray2.splice(index, 1);
      if (this.fieldArray2.length < 1) {
      this.macadded = false;
      }
  }






  visible = true;
  
//Variable declation


  myControl = new FormControl();
  public emp={"designation":""};
  public client={};
  //public site={"projectId":"","contractType":"","projectName":"","regionalManagerId":"","seniorManagerId":"","asstSeniorManagerId":"","siteInchargeId":"",
  //"manPowerDTO":[],"machineDTO":[],"materialDTO":[],};
  projects: Object;
  sites: Object;
  employees: Object;
  rm: Object;
  sm: Object;
  asm: Object;
  si: Object;
  //public manpower={};
  //public material={};
  //public machine={};
  public escalationtype={};
  


  postEmployee()
  {
   
     this.isLoadingResults = true;
   
    this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee', this.emp)
    
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

  postClient()
  {
    
    this.isLoadingResults = true;
    
    console.log(this.client);
    this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/project', this.client)
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

  postSite()
  {
    this.site.manPowerDTO = this.fieldArray;
    this.site.machineDTO = this.fieldArray2;
    this.site.materialDTO = this.fieldArray1;
   // this.createSiteJson();
    console.log("converted date" + this.site.machineDTO);  
    console.log(this.site);
    this.isLoadingResults = true;
    this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site', this.site)
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

  postEscalationType()
  {
   
    this.isLoadingResults = true;
    
    console.log(this.site);
    this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/esctype', this.escalationtype)
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

  listClient()
  {
    
    this.data.getProjects().subscribe(
      data => this.projects = data      
    );
    console.log(this.data);
  }

  listRM()
  {
    this.data.getEmployee('REGIONAL MANAGER').subscribe(
      data => this.rm = data
    );
    console.log(this.data);
  }

  listSM()
  {
    this.data.getEmployee('SENIOR MANAGER').subscribe(
      data => this.sm = data
    );
    console.log(this.data);
  }

  listASM()
  {
    this.data.getEmployee('ASSISTANT SENIOR MANAGER').subscribe(
      data => this.asm = data
    );
    console.log(this.data);
  }

  listSI()
  {
    this.data.getEmployee('SITE INCHARGE').subscribe(
      //data => this.employees = data['content']
      data => this.si = data
    );
    console.log(this.data);
  }

  //createSiteJson()
  //{
  //  this.site.manPowerDTO.push(this.manpower);
  //  this.site.machineDTO.push(this.machine);
  //  this.site.materialDTO.push(this.material);
  //}

  setEquipmentType(type)
  {
    this.machine.equipmentType = type;
    console.log(this.machine.equipmentType);
  }
  setContractType(id)
  {
    console.log(id);
    this.site.contractType = id;
  }

  setDesignation(id)
  {
    console.log(id);
    this.emp.designation = id;
  }

  setSiteProject(id)
  {
    console.log(id);
    this.site.projectId = id;
  }

  setSiteRM(id)
  {
    console.log(id);
    this.site.regionalManagerId = id;
  }

  setSiteSM(id)
  {
    console.log(id);
    this.site.seniorManagerId = id;
  }

  setSiteASM(id)
  {
    console.log(id);
    this.site.asstSeniorManagerId = id;
  }

  setSiteSI(id)
  {
    console.log(id);
    this.site.siteInchargeId = id;
    console.log(this.site);
  }

 
  ngOnInit() {
    this.listClient();
    this.listRM();
    this.listSM();
    this.listASM();
    this.listSI();
   // this.popToast();
   /* this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );*/
  }

  /*private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }*/

closeprogess(){
  this.isLoadingResults = false;
}

}
