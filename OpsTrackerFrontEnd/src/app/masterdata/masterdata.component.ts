import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Toolbarservice } from '../my-nav/my-nav.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl,NgForm,FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Dateformat } from '../dateformat.service';
import {map, startWith ,switchMap,catchError} from 'rxjs/operators';
import {DataService} from '../data.service';
import { Site } from '../models/site.model';
import { ManPower } from '../models/manpower.model';
import { Material } from '../models/material.model';
import { Machine } from '../models/machine.model';
import { Client } from '../models/client.model';
import { Project } from '../models/project.model';

import { Observable, of } from 'rxjs';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTabChangeEvent } from '@angular/material';
import { ViewChild,ElementRef,Renderer} from '@angular/core';




@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css'],
 
  providers: [Toolbarservice]
})
export class MasterdataComponent implements OnInit {
  @ViewChild('client_name') clnameinput: ElementRef;
 

  @ViewChild('myForm1') public clientfrm: NgForm;
  @ViewChild('myForm') public employfrm: NgForm;
  @ViewChild('myForm2') public sitefrm: NgForm;
  @ViewChild('myForm3') public escalfrm: NgForm;
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
  shift: string[]=['Shift1','Shift2','Shift3','Shift4','Shift5'];
 
  constructor(private http: HttpClient, private activaterouter: ActivatedRoute, private router: Router, public nav: Toolbarservice, private data: DataService,
    private dateFormat: Dateformat,toasterService:ToasterService,private renderer: Renderer){
      this.toasterService=toasterService;
      //this.createForm();
    }
    public config: ToasterConfig =new ToasterConfig({positionClass: 'toast-center'});




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
  visible = true;
  
  //Variable declation
  
  
    myControl = new FormControl();
    public emp={"designation":""};
    client = new Client();

   // public client={};
    //public site={"projectId":"","contractType":"","projectName":"","regionalManagerId":"","seniorManagerId":"","asstSeniorManagerId":"","siteInchargeId":"",
    //"manPowerDTO":[],"machineDTO":[],"materialDTO":[],};
    projects: Object;
   project=new Project();
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

  emp_code = new FormControl('', [Validators.required]);
  emp_name = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$')]);
  emp_designation = new FormControl('', [Validators.required]);
  email1 = new FormControl('', [Validators.required, Validators.email]);

  emp_mob = new FormControl('', [Validators.required]);
  client_name = new FormControl('', [Validators.required]);
  client_code = new FormControl('', [Validators.required]);
  esc_type = new FormControl('', [Validators.required]);
  //siteClient_Name = new FormControl('', [Validators.required]);


  projects_name = new FormControl('', [Validators.required]);
  site_code = new FormControl('', [Validators.required]);
  site_name = new FormControl('', [Validators.required]);
  site_address = new FormControl('', [Validators.required]);
  site_contracttype = new FormControl('', [Validators.required]);
  site_Rm = new FormControl('', [Validators.required]);
  site_Sm = new FormControl('', [Validators.required]);
  site_Asm = new FormControl('', [Validators.required]);
  site_Si = new FormControl('', [Validators.required]);


  manp_shift = new FormControl('', [Validators.required]);
  manp_startTime = new FormControl('', [Validators.required]);
  manp_endTime = new FormControl('', [Validators.required]);
  manp_planned = new FormControl('', [Validators.required]);

  mat_materialType = new FormControl('', [Validators.required]);
  mat_commitmentDate = new FormControl('', [Validators.required]);

  mac_machineType = new FormControl('', [Validators.required]);
  mac_equipmentType = new FormControl('', [Validators.required]);
  mac_modelNo = new FormControl('', [Validators.required]);
  mac_serialNo = new FormControl('', [Validators.required]);
  //emp_name = new FormControl('', [Validators.required]);

  getCodeErrorMessage() {
    return this.emp_code.hasError('required') ? 'You must enter a value' :'';      
  }
  getNameErrorMessage() {
    return this.emp_name.hasError('required') ? 'You must enter a value' : 
    this.emp_name.hasError('pattern') ? 'Special character is not allowed' : '';      
  }

  getDesignationErrorMessage() {
    return this.emp_designation.hasError('required') ? 'You must select a value' :'';      
  }
 

  getErrorMessage() {
    return this.email1.hasError('required') ? 'You must enter a value' :
        this.email1.hasError('email') ? 'Not a valid email' :
            '';
  }
  getMobErrorMessage() {
    return this.emp_mob.hasError('required') ? 'You must enter a value' :'';      
  }

  getClientnameErrorMessage() {
    return this.client_name.hasError('required') ? 'You must enter a value' :'';      
  }
  getClientCodeErrorMessage() {
    return this.client_code.hasError('required') ? 'You must enter a value' :'';      
  }

  getEscalationtypeErrorMessage() {
    return this.esc_type.hasError('required') ? 'You must enter a value' :'';      
  }

  getSiteprojectnameErrorMessage() {
    return this.projects_name.hasError('required') ? 'You must enter a value' :'';      
  }


  getSitecodeErrorMessage() {
    return this.site_code.hasError('required') ? 'You must enter a value' :'';      
  }

  getSitenameErrorMessage() {
    return this.site_name.hasError('required') ? 'You must enter a value' :'';      
  }

  getSitaddressErrorMessage() {
    return this.site_address.hasError('required') ? 'You must enter a value' :'';      
  }

  getSitcontracttypeErrorMessage() {
    return this.site_contracttype.hasError('required') ? 'You must enter a value' :'';      
  }

  getSitRmErrorMessage() {
    return this.site_Rm.hasError('required') ? 'You must enter a value' :'';      
  }

  getSitSmErrorMessage() {
    return this.site_Sm.hasError('required') ? 'You must enter a value' :'';      
  }

  getSitAsmErrorMessage() {
    return this.site_Asm.hasError('required') ? 'You must enter a value' :'';      
  }

  getSitSiErrorMessage() {
    return this.site_Si.hasError('required') ? 'You must enter a value' :'';      
  }

  getManpowershiftErrorMessage() {
    return this.manp_shift.hasError('required') ? 'You must enter a value' :'';      
  }

  getManpowerstartTimeErrorMessage() {
    return this.manp_startTime.hasError('required') ? 'You must enter a value' :'';      
  }

  getManpowerendTimeErrorMessage() {
    return this.manp_endTime.hasError('required') ? 'You must enter a value' :'';      
  }

  getManpowerplannedErrorMessage() {
    return this.manp_planned.hasError('required') ? 'You must enter a value' :'';      
  }
  getMaterialtypeErrorMessage() {
    return this.mat_materialType.hasError('required') ? 'You must enter a value' :'';      
  }

  getMaterialcommitdateErrorMessage() {
    return this.mat_commitmentDate.hasError('required') ? 'You must enter a value' :'';      
  }

  

  getMacmachinetypeErrorMessage() {
    return this.mac_equipmentType.hasError('required') ? 'You must enter a value' :'';      
  }

  getMacequipmentTypeErrorMessage() {
    return this.mac_modelNo.hasError('required') ? 'You must enter a value' :'';      
  }

  getMacmodelNoErrorMessage() {
    return this.mac_serialNo.hasError('required') ? 'You must enter a value' :'';      
  }

  getMacserialNoErrorMessage() {
    return this.mat_commitmentDate.hasError('required') ? 'You must enter a value' :'';      
  }






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
  




  setMaterialType(type){
    this.material.materialType = type;
    console.log(type);
  }
  setShift(shift){
    this.manpower.shift = shift;
    console.log(shift);
  }

  addmanFieldValue() {
    this.manadded = true;
    console.log(this.manpower.endTime);
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
   // console.log(this.material.commitmentDate);
   //const dateString=this.dateFormat.convertdate(this.material.commitmentDate)
   //console.log(dateString);
  // const newDate = new Date(dateString);
  // console.log(newDate);

  //this.material.commitmentDate=newDate;

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
    console.log(this.machine.machineType);
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






 
  


  postEmployee()
  {
    console.log(this.emp);
    this.isLoadingResults = true;
    this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee', this.emp)
    
      .subscribe(  (data:any) => { 
        console.log(data['status']);
        if(data['status']=='success'){
          this.isLoadingResults = false;
          this.employfrm.reset();
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
         
          this.isLoadingResults = false;
          
             console.log('Backend returned status code: ', err.status);
             console.log('Response body:', err.error);
             console.log('Response body:', err.error['message']);
             if(err.error['message']=='already exist'){
              this.toasterService.pop('warning','Employee code is already exist' ,'');
             }
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
       
      // this.client_name.updateValueAndValidity();
      this.clientfrm.reset();
     // this.client.name='';
    // this.client_name.clearValidators();
    //  this.client_name.updateValueAndValidity();
    
      
    // this.renderer.invokeElementMethod(this.clnameinput.nativeElement, 'blur');
    
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
           console.log('Response body:', err.error['message']);

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
   // console.log("converted date" + this.site.machineDTO);  
    console.log(this.site);
    this.isLoadingResults = true;
    this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site', this.site)
    .subscribe(  (data:any) => { 
      console.log(data['status']);
      if(data['status']=='success'){
        this.isLoadingResults = false;
       
        this.toasterService.pop('success','Successfully Submitted' ,'');
        this.sitefrm.reset();
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
        this.escalfrm.reset();
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
  onLinkClick(event: MatTabChangeEvent) {
    /* console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab); */
  if(event.index== 2){
    this.listClient();
    this.listRM();
    this.listSM();
    this.listASM();
    this.listSI();
  }
    
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
