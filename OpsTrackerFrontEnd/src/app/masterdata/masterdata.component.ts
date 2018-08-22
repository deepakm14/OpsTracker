import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css']
})
export class MasterdataComponent implements OnInit {
  constructor(private http : HttpClient){}
//Variable declation
  public emp={};
  public client={};
  public site={"manPowerDTO":[],"machineDTO":[],"materialDTO":[]};
  public projects=[{"name":[]}];
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

  listClient()
  {
    this.http.get('http://localhost:8080/uds/project/search')
    .subscribe(
      (data:any) => {
        this.projects = data;
        console.log(this.projects);
      }
    )
  }

  postSite()
  {
    this.createSiteJson();
    console.log(this.site);
   /* this.http.post('http://localhost:8080/uds/site', this.site)
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )*/
  }

  createSiteJson()
  {
    this.site.manPowerDTO.push(this.manpower);
    this.site.machineDTO.push(this.machine);
    this.site.materialDTO.push(this.material);
  }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  /*step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }*/

  ngOnInit() {
    this.listClient();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
