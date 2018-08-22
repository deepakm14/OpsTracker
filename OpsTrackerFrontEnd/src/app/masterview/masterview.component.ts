import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../data.service';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import {HttpClient} from '@angular/common/http';
import { Employ } from '../models/employ.model';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-masterview',
  templateUrl: './masterview.component.html',
  styleUrls: ['./masterview.component.css']
})
export class MasterviewComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);

  displayedColumns = [  'code', 'name', 'designation', 'mail' , 'mob'];



  constructor(private userService: DataService) {}

  ngOnInit() {


    /* this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; */
    /* this.data.getEmployee().subscribe(
      data => this.users$ = data
    // tslint:disable-next-line:semicolon
    ) */



  }
}
  export class UserDataSource extends DataSource<any> {
    constructor(private userService: DataService) {
      super();
    }
    connect(): Observable<Employ[]> {
      return this.userService.getEmployee();
    }

    disconnect() {}
  }

