import { Component, OnInit } from '@angular/core';
import { Toolbarservice } from '../my-nav/my-nav.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css'],
  providers: [Toolbarservice]
})
export class MasterdataComponent implements OnInit {
<<<<<<< HEAD
  visible = true;
  constructor(private activaterouter: ActivatedRoute, private router: Router, public nav: Toolbarservice) {
   // console.log(this.router.url);

  }

=======
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
>>>>>>> 76645d2763b1fa864be9a3050c1f9ad02ec43f8d
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
