import { Component, OnInit } from '@angular/core';
import { Toolbarservice } from '../my-nav/my-nav.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {map, startWith ,switchMap,catchError} from 'rxjs/operators';
import {DataService} from '../data.service';
import { Observable, of } from 'rxjs'






@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css'],
  providers: [Toolbarservice]
})
export class MasterdataComponent implements OnInit {
  date;
  myControl1 = new FormControl();
  Contracttype: string[] = ['Manpower', 'Lumsum', 'SLA' , 'One Time', 'Project Event' , 'PartTimers'];
  Materialtype: string[] = ['Fixed materials', 'At Actual'];
  Designation: Array<any> = [{'id':'1','name':'REGIONAL MANAGER'},{'id':'2','name':'SENIOR MANAGER'},{'id':'3','name':'SITE INCHARGE'},{'id':'4','name':'ASSISTANT SENIOR MANAGER'}];


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
  materialtype(type){
    console.log(type);
  }


  addmanFieldValue(newAttribute) {
    this.manadded = true;
   this.date=new Date();
  
      this.fieldArray.push(this.newAttribute );
     // console.log(this.fieldArray);
      this.newAttribute = {};
  }

  deletemanFieldValue(index) {
   
      this.fieldArray.splice(index, 1);
      if (this.fieldArray.length < 1) {
      this.manadded = false;
      }
  }


  addmatFieldValue(newAttribute1) {
    this.matadded = true;
  
      this.fieldArray1.push(this.newAttribute1);
     // console.log(this.fieldArray);
      this.newAttribute1 = {};
  }

  deletematFieldValue(index) {
   
      this.fieldArray1.splice(index, 1);
      if (this.fieldArray1.length < 1) {
      this.matadded = false;
      }
  }

  addmacFieldValue(newAttribute2) {
    this.macadded = true;
   
      this.fieldArray2.push(this.newAttribute2);
     // console.log(this.fieldArray);
      this.newAttribute2 = {};
  }

  deletemacFieldValue(index) {
   
      this.fieldArray2.splice(index, 1);
      if (this.fieldArray2.length < 1) {
      this.macadded = false;
      }
  }






  visible = true;
  constructor(private http: HttpClient, private activaterouter: ActivatedRoute, private router: Router, public nav: Toolbarservice, private data: DataService){}
//Variable declation
  myControl = new FormControl();
  public emp={"designation":""};
  public client={};
  public site={"projectId":"","contractType":"","projectName":"","regionalManagerId":"","seniorManagerId":"","asstSeniorManagerId":"","siteInchargeId":"",
  "manPowerDTO":[],"machineDTO":[],"materialDTO":[],};
  projects: Object;
  sites: Object;
  employees: Object;
  rm: Object;
  sm: Object;
  asm: Object;
  si: Object;
  public manpower={};
  public material={};
  public machine={};
  public escalationtype={};
  


  postEmployee()
  {
    this.isLoadingResults = true;
   
    this.http.post('http://localhost:8080/uds/employee', this.emp)
    .pipe(
      startWith({}),
      switchMap(() => {
       
        
        return 'ok';

      }),
      map(data => {
        console.log('ggg');
        // Flip flag to show that loading has finished.
       
      
        return 'ok';
      }),
      catchError(() => {
        console.log('errr');
      
        return 'ok';
      })
    )
      .subscribe(
        (data:any) => { 
          if(data.length) {
            console.log(data);
           
          }
          
        },
        error => console.log("Error: ", error),
        () => {
          this.isLoadingResults = false;
          console.log('finished');
        }
      );
  }

  postClient()
  {
    
    this.isLoadingResults = true;
    
    console.log(this.client);
    this.http.post('http://localhost:8080/uds/project', this.client)
    .pipe(
      startWith({}),
      switchMap(() => {
       
        
        return 'ok';

      }),
      map(data => {
        console.log('ggg');
        // Flip flag to show that loading has finished.
       
      
        return 'ok';
      }),
      catchError(() => {
        console.log('errr');
      
        return 'ok';
      })
    )
      .subscribe(
        (data:any) => { 
          if(data.length) {
            console.log(data);
           
          }
         
        },
        error => {
         
        },
        () => {
          this.isLoadingResults = false;
          console.log('finished');
        }
      );
      
  }

  postSite()
  {

    this.site.manPowerDTO = this.fieldArray;
    this.site.machineDTO = this.fieldArray2;
    this.site.materialDTO = this.fieldArray1;
   // this.createSiteJson();
    console.log(this.site);
    this.isLoadingResults = true;
    this.http.post('http://localhost:8080/uds/site', this.site)
    .pipe(
      startWith({}),
      switchMap(() => {
       
        
        return 'ok';

      }),
      map(data => {
        console.log('ggg');
        // Flip flag to show that loading has finished.
       
      
        return 'ok';
      }),
      catchError(() => {
        console.log('errr');
      
        return 'ok';
      })
    )
    .subscribe(
      (data:any) => {
        console.log(data);
      } ,
      error => {
       
      },
      () => {
        this.isLoadingResults = false;
        console.log('finished');
      }
    );
  }

  postEscalationType()
  {
   
    this.isLoadingResults = true;
    
    console.log(this.site);
    this.http.post('http://localhost:8080//uds/esctype', this.escalationtype)
    .pipe(
      startWith({}),
      switchMap(() => {
       
        
        return 'ok';

      }),
      map(data => {
        console.log('ggg');
        // Flip flag to show that loading has finished.
       
      
        return 'ok';
      }),
      catchError(() => {
        console.log('errr');
      
        return 'ok';
      })
    )
    .subscribe(
      (data:any) => {
        console.log(data);
        
      },
      error => {
       
      },
      () => {
        this.isLoadingResults = false;
        console.log('finished');
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
      data => this.employees = data['content']
    );
    console.log(this.data);
  }

  createSiteJson()
  {
    this.site.manPowerDTO.push(this.manpower);
    this.site.machineDTO.push(this.machine);
    this.site.materialDTO.push(this.material);
  }


  setContractType(id:string)
  {
    console.log(id);
    this.site.contractType = id;
  }

  setDesignation(id:string)
  {
    console.log(id);
    this.emp.designation = id;
  }

  setSiteProject(id:string)
  {
    console.log(id);
    this.site.projectId = id;
  }

  setSiteRM(id:string)
  {
    console.log(id);
    this.site.regionalManagerId = id;
  }

  setSiteSM(id:string)
  {
    console.log(id);
    this.site.seniorManagerId = id;
  }

  setSiteASM(id:string)
  {
    console.log(id);
    this.site.asstSeniorManagerId = id;
  }

  setSiteSI(id:string)
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
