import { Component, OnInit } from '@angular/core';
import { Toolbarservice } from '../my-nav/my-nav.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DataService} from '../data.service';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css'],
  providers: [Toolbarservice]
})
export class MasterdataComponent implements OnInit {
  
  visible = true;
  constructor(private http: HttpClient, private activaterouter: ActivatedRoute, private router: Router, public nav: Toolbarservice, private data: DataService){}
//Variable declation
  myControl = new FormControl();
  public emp={};
  public client={};
  public site={"projectId":"","projectName":"","regionalManagerId":"","seniorManagerId":"","asstSeniorManagerId":"","siteInchargeId":"",
  "manPowerDTO":[],"machineDTO":[],"materialDTO":[]};
  projects: Object;
  sites: Object;
  employees: Object;
  public manpower={};
  public material={};
  public machine={};
  


  postEmployee()
  {
    console.log(this.emp);
    this.http.post('http://localhost:8080/uds/employee', this.emp)
      .subscribe(
        (data:any) => { 
          if(data.length) {
            console.log(data);
          }
        }
      )
  }

  postClient()
  {
    console.log(this.client);
    this.http.post('http://localhost:8080/uds/project', this.client)
      .subscribe(
        (data:any) => { 
          if(data.length) {
            console.log(data);
          }
        }
      )
  }

  postSite()
  {
    this.createSiteJson();
    console.log(this.site);
    this.http.post('http://localhost:8080/uds/site', this.site)
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

  listClient()
  {
    this.data.getProjects().subscribe(
      data => this.projects = data      
    );
    console.log(this.data);
  }

  listEmployees()
  {
    this.data.getEmployee().subscribe(
      data => this.employees = data
    );
    console.log(this.data);
  }

  createSiteJson()
  {
    this.site.manPowerDTO.push(this.manpower);
    this.site.machineDTO.push(this.machine);
    this.site.materialDTO.push(this.material);
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
    this.listEmployees();

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

}
