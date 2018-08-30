import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../data.service';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import {HttpClient} from '@angular/common/http';
import {Dateformat} from '../dateformat.service';




@Component({
  selector: 'app-masterview',
  templateUrl: './masterview.component.html',
  styleUrls: ['./masterview.component.css']
})
export class MasterviewComponent implements OnInit {

  displayedColumns: string[] = [  'code', 'name', 'designation', 'mail' , 'phone'];
  udsDatabase: UdsHttpDao | null;
  data: Employeedata[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,private dateformat: Dateformat) {}

  ngOnInit() {
console.log(this.dateformat.convertdate('Wed Aug 29 2018 00:00:00 GMT+0530 (India Standard Time)'));

    this.udsDatabase = new UdsHttpDao(this.http);
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);


    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        // tslint:disable-next-line:no-non-null-assertion
        return this.udsDatabase!.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex);
      }),
      map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;

        return data.items;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe(data => this.data = data);
}

    /* this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; */
    /* this.data.getEmployee().subscribe(
      data => this.users$ = data
    // tslint:disable-next-line:semicolon
    ) */
  }

  export interface UdsApi {
    items: Employeedata[];
    total_count: number;

  }

  export interface Employeedata {

    code: number;
    designation: string;
    mail: string;
    mob: number;
    name: string;
  }

  export class UdsHttpDao {
    constructor(private http: HttpClient) {}

    getRepoIssues(sort: string, order: string, page: number): Observable<UdsApi> {
      const href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com/uds/employee/search';
      const requestUrl =
      `${href}&sort=${sort}&order=${order}&page=${page + 1}`;


      return this.http.get<UdsApi>(requestUrl);
    }
  }
