import { Component, OnInit, Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';
import { Site } from '../models/site.model';
import { Project } from '../models/project.model';
import { ManPowerTransaction } from '../models/manpowertransaction.model';
import { ManPower } from '../models/manpower.model';

import { Material } from '../models/material.model';
import { MaterialTransaction } from '../models/materialtransaction.model';
import { MachineTransaction } from '../models/machinetransaction.model';

import {map, startWith ,switchMap,catchError} from 'rxjs/operators';


@Component({
  selector: 'app-opstracker',
  templateUrl: './opstracker.component.html',
  styleUrls: ['./opstracker.component.css']
})


export class OpstrackerComponent implements OnInit {

  //Constructor call
  constructor(private data: DataService, private http: HttpClient) { }

  myControl = new FormControl();
  isLoadingResults = false;
  //variable declation
  Matstatus: string[] = ['Fixed', 'Attached']
  
  projects: Object;
  sites: Object;
  project = new Project();
  site = new Site();
  manpowers: Array<ManPower>;
  manpower = new ManPower();
  materials: Array<Material>;
  material = new Material();
  manpowertransaction = new ManPowerTransaction();
  materialtransaction = new MaterialTransaction();
  machinetransaction = new MachineTransaction();
  shift: string;
  time = [];
  message: string;
  shifts = [];
  materialtypes= [];
  clearFormArray=[];
 
  value: number;
  id;


  setStatus(id:string){
    //this.Mat.status=id;
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

  setProject(id:number)
  {
    console.log(id);
    this.project.id = id;
    console.log(this.project); 
  }

  setSite(id)
  {
     console.log(id);
     this.id = id; 
     console.log(this.project);
     this.setManPower();
  
  }

  setManPower()
   {
     this.data.getSite(this.id).subscribe(
       data => {
        this.shifts.length=0;
         this.site = data;
         this.manpowers = this.site.manPowerDTO;
         this.manpowers.forEach(i =>{
         this.manpower = i;
         this.shifts.push(this.manpower.startTime + "-" + this.manpower.endTime);
         console.log(this.shifts);
         })}
     );
   }

   setShiftDetails(shift: string)
   {
     console.log("shift" + shift);
    this.time.push(shift.split('-'));
    console.log("time" + this.time);
    this.manpowers.forEach(i =>{
      this.manpower = new ManPower();
      this.manpower = i;   
      console.log(this.time[0] == this.manpower.startTime + "," +this.manpower.endTime);   
      if(this.time[0] == this.manpower.startTime + "," +this.manpower.endTime)
    {
      this.manpowertransaction.planned = 0;
      this.manpowertransaction.planned = this.manpower.planned;
      this.manpowertransaction.shiftTime = shift;
      this.manpowertransaction.siteId = this.site.id;
      this.manpowertransaction.projectId = this.project.id;
    }
    })
      this.time = [];
      shift = " ";
      console.log("time" + this.time);
   }

   setShortFall(value: number)
   {
     console.log(value);
     this.manpowertransaction.actual = value;
     this.manpowertransaction.shortfall = this.manpowertransaction.planned - this.manpowertransaction.actual;
   }


setMaterial(id){
  this.data.getSite(this.id).subscribe(
       data => {
  
        this.materialtypes.length = 0;
      
         this.site = data;
         this.materials = this.site.materialDTO;
         this.materials.forEach(i =>{
         this.material = i;
        
         this.materialtypes.push(this.material.commitmentDate);
        
         })}
     );
}

setCommitmentdate(Commitdate:string){
  this.materials.forEach(i =>{
    this.material = new Material();
    this.material = i;
   
    if(Commitdate == this.material.commitmentDate){
      this.materialtransaction.commitmentDate=this.material.commitmentDate;
     
     
      this.materialtransaction.siteId = this.site.id;
      this.materialtransaction.projectId = this.project.id;
    }
   
    })
 
}


  postManPowerTransaction()
  {
    console.log(this.manpowertransaction);
    try{
      this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/manpower',this.manpowertransaction)
      .subscribe(
        (data:any) => { 
          if(data.length) {
            console.log(data);
            console.log("done");
          }
        }
      )
    }
    catch(Exception )
    {
      console.error("not done");
    }  
  }

postMaterialTransaction()
{
  console.log(this.materialtransaction);
  
    this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/material',this.materialtransaction)
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
    ).subscribe(
      (data:any) =>  { 
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

postMachineTransaction()
{
  this.http.post('http://localhost:8080/uds/opstracker/machine',this.materialtransaction)
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
    ).subscribe(
      (data:any) =>  { 
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
  
  ngOnInit() {
    this.listClients();
    this.listSites();
  }

}
