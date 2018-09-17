import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { ManPower } from '../models/manpower.model';
import { Material } from '../models/material.model';
import { Machine } from '../models/machine.model';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Dateformat } from '../dateformat.service';
import {map, startWith ,switchMap,catchError} from 'rxjs/operators';
import {DataService} from '../data.service';
import { Site } from '../models/site.model';
import {ToasterModule,ToasterService,ToasterConfig} from 'angular2-toaster';
import { Sitemachinedialog } from '../models/sitemachinedialog.model';
import { Sitemanpowerdialog } from '../models/sitemanpowerdialog.model';
import { Sitematerialdialog } from '../models/sitematerialdialog.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Sitedata } from '../models/sitedata.model';
import { ViewChild,ElementRef,Renderer} from '@angular/core';
@Component({
  selector: 'app-sitedialog',
  templateUrl: './sitedialog.component.html',
  styleUrls: ['./sitedialog.component.css']
})
export class SitedialogComponent implements OnInit {
  @ViewChild('site_name') clnameinput: ElementRef;
  private toasterService: ToasterService;
  constructor(public thisdialogRef: MatDialogRef<SitedialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private data1: DataService, private http: HttpClient,toasterService:ToasterService,private renderer: Renderer) {
    this.toasterService=toasterService;
   }
   Materialtype: string[] = ['Fixed materials', 'At Actual'];
   Equipmenttype: string[] = ['Rented', 'Amortised'];
   shift: string[]=['Shift1','Shift2','Shift3','Shift4','Shift5'];
   sitemanpowerdialog = new Sitemanpowerdialog();
   sitematerialdialog = new Sitematerialdialog();
   sitemachinedialog = new Sitemachinedialog();
   isLoadingResults = false;
  site = new Site();
  sitedata:any = new Sitedata();
 
  manpower = new ManPower();
  material = new Material();
  machine = new Machine();
  date;
  myControl1 = new FormControl();
  
  Contracttype: string[] = ['Manpower', 'Lumsum', 'SLA' , 'One Time', 'Project Event' , 'PartTimers'];
 
  Designation: Array<any> = [{'id':'1','name':'REGIONAL MANAGER'},{'id':'2','name':'SENIOR MANAGER'},{'id':'3','name':'SITE INCHARGE'},{'id':'4','name':'ASSISTANT SENIOR MANAGER'}];
 
  projects: Object;
  sites: Object;
  employees: Object;
  rm: Object;
  sm: Object;
  asm: Object;
  si: Object;
id;
  
  

  
  setContractType(id)
  {
    console.log(id);
    this.data.contractType = id;
    this.sitedata.contractType=this.data.contractType;
  }

  setDesignation(id)
  {
    console.log(id);
    this.data.designation = id;
  }

  setSiteProject(id)
  {
    console.log(id);
    this.data.projectId = id;
    this.sitedata.projectId=this.data.projectId;
   
  }

  setSiteRM(id)
  {
    console.log(id);
    this.data.regionalManagerId = id;
    this.sitedata.regionalManagerId=this.data.regionalManagerId;
  }
  setShift(shift){
    this.manpower.shift = shift;
    console.log(shift);
  }

  setSiteSM(id)
  {
    console.log(id);
    this.data.seniorManagerId = id;
    this.sitedata.seniorManagerId=this.data.seniorManagerId;
  }

  setSiteASM(id)
  {
    console.log(id);
    this.data.asstSeniorManagerId = id;
    this.sitedata.asstSeniorManagerId=this.data.asstSeniorManagerId;
  }

  setSiteSI(id)
  {
    console.log(id);
    this.data.siteInchargeId = id;
    this.sitedata.siteInchargeId=this.data.siteInchargeId;
    console.log(this.site);
  }

 
  ngOnInit() {
    this.thisdialogRef.updateSize('90%', '100%');
    this.listClient();
    this.listRM();
    this.listSM();
    this.listASM();
    this.listSI();
  }
  listClient()
  {
   // this.clnameinput.nativeElement.clearFocus();
    this.data1.getProjects().subscribe(
      data => this.projects = data
    );
    this.id =  this.data.id;
    this.getmanpower(this.id);
     this.getmaterial(this.id);
    
    this.getmachine(this.id); 
    console.log(this.data);
   
   // this.renderer.invokeElementMethod(this.clnameinput.nativeElement, 'blur');
  }

  listRM()
  {
    this.data1.getEmployee('REGIONAL MANAGER').subscribe(
      data => this.rm = data
    );
    console.log(this.data);
  }

  listSM()
  {
    this.data1.getEmployee('SENIOR MANAGER').subscribe(
      data => this.sm = data
    );
    console.log(this.data);
  }

  listASM()
  {
    this.data1.getEmployee('ASSISTANT SENIOR MANAGER').subscribe(
      data => this.asm = data
    );
    console.log(this.data);
  }

  listSI()
  {
    this.data1.getEmployee('SITE INCHARGE').subscribe(
      //data => this.employees = data['content']
      data => this.si = data
    );
    console.log(this.data);
  }

  onCloseConfirm() {
    this.thisdialogRef.close('Confirm');
      }
    
      onCloseCancel() {
    this.thisdialogRef.close('Cancel');
      }



      getmanpower(id:number) {
  
        //const item1 = this.site2.find(i => i.id === id);
        console.log(id);
        this.data1.getSitemanpower(id).subscribe(
          
          data => {
            this.sitemanpowerdialog=data['manPowerDTO'];
            console.log(data['manPowerDTO']);
            
            
      
          }
        );
        
       
          
        
        }
        getmaterial(id:number) {
        
          //const item1 = this.site2.find(i => i.id === id);
          console.log(id);
          this.data1.getSitematerial(id).subscribe(
            
            data => {
              this.sitematerialdialog=data['materialDTO'];
              console.log(this.sitematerialdialog);
              
             
        
            }
          );
          
         
            
          
          }
      
      
          getmachine(id:number) {
        
            //const item1 = this.site2.find(i => i.id === id);
            console.log(id);
            this.data1.getSitemachine(id).subscribe(
              
              data => {
                this.sitemachinedialog=data['machineDTO'];
                console.log(this.sitemachinedialog);
                
                
              }
            );
            
           
              
            
            }


            updateSite()
            {
              this.data.manPowerDTO = this.sitemanpowerdialog;
              this.data.machineDTO = this.sitematerialdialog;
              this.data.materialDTO = this.sitemachinedialog;
              this.sitedata.manPowerDTO = this.sitemanpowerdialog;
              this.sitedata.machineDTO = this.sitemachinedialog;
              this.sitedata.materialDTO = this.sitematerialdialog;
             this.sitedata.code=this.data.code;
             this.sitedata.name=this.data.name;
             this.sitedata.address=this.data.address;
             this.sitedata.id=this.data.id;
             this.sitedata.projectId=this.data.projectId;
             
             this.sitedata.siteInchargeId=  this.data.siteInchargeId;
             this.sitedata.asstSeniorManagerId=this.data.asstSeniorManagerId;
             this.sitedata.seniorManagerId= this.data.seniorManagerId;
             this.sitedata.regionalManagerId= this.data.regionalManagerId;
             this.sitedata.contractType= this.data.contractType;
             this.sitedata.projectName=this.data['project'].name;
             this.sitedata.projectId=this.data['project'].id;


             // this.createSiteJson();
             // console.log("converted date" + this.site.machineDTO);  
              console.log(this.sitedata);
            //  console.log(this.sitedata.projectId);
              this.isLoadingResults = true;
              this.http.put('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site/update', this.sitedata)
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

}
