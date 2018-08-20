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
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
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
