import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-emplyeeview',
  templateUrl: './emplyeeview.component.html',
  styleUrls: ['./emplyeeview.component.css']
})
export class EmplyeeviewComponent implements OnInit {
  displayedColumns: string[] = ['created', 'state',  'title' ];
  //displayedColumns: string[] = [  'code', 'name', 'designation', 'mail' , 'phone'];
  employDatabase: EmployHttpDao | null;
  data: Employdetails[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {


   }

  ngOnInit() {
    this.employDatabase = new EmployHttpDao(this.http);
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // tslint:disable-next-line:no-non-null-assertion
          return this.employDatabase!.getRepoIssues(
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
  }
  export interface EmpApi {
    items: Employdetails[];
    total_count: number;
  }
  /* export interface Employdetails {
    code: number;
    name: string;
  designation: string;
    mail: string;
    phone: number;
  } */

  export interface Employdetails {
    created_at: string;
    number: string;
    state: string;
    title: string;
  }

  export class EmployHttpDao {
    constructor(private http: HttpClient) {}
    getRepoIssues(sort: string, order: string, page: number): Observable<EmpApi> {
      const href = 'https://api.github.com/search/issues';
      const requestUrl =
          `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

      return this.http.get<EmpApi>(requestUrl);
    }
  }