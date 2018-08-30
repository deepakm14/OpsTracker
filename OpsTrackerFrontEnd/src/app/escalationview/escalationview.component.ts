import { Component, OnInit, ViewChild , Input } from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {  MatDialog,  MatDialogRef , MatDialogConfig , MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {DataService} from '../data.service';
import {EscalationdialogComponent} from '../escalationdialog/escalationdialog.component';

@Component({
  selector: 'app-escalationview',
  templateUrl: './escalationview.component.html',
  styleUrls: ['./escalationview.component.css']
})
export class EscalationviewComponent implements OnInit {
  dialogResult="";
  escalation2: Escalation[] = [];
  exampleDatabase: ExampleHttpDao | null;

  displayedColumns: string[] = ['id','escalationType','actionsColumn' ];
  /* //displayedColumns: string[] = [  'code', 'name', 'designation', 'mail' , 'phone']; */



  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  page: (Observable<number>|any);
  constructor(private http: HttpClient, private data1: DataService, private dialog: MatDialog) { }

  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);

   // If the user changes the sort order, reset back to the first page.
 //  this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

   merge(this.paginator.page)
     .pipe(
       startWith({}),
       switchMap(() => {
          console.log('enter1');
         this.isLoadingResults = true;
         return this.exampleDatabase!.getRepoIssues(this.paginator.pageIndex,
          8);

       }),
       map(data => {
         console.log('ggg');
         // Flip flag to show that loading has finished.
         this.isLoadingResults = false;
         this.isRateLimitReached = false;
         this.resultsLength = data['totalElements'];
console.log(data['totalElements']);
         return data;
       }),
       catchError(() => {
         console.log('errr');
         this.isLoadingResults = false;
         // Catch if the GitHub API has reached its rate limit. Return empty data.
         this.isRateLimitReached = true;
         return observableOf([]);
       })
     ).subscribe(data => this.escalation2 = data['content']);
  // this.listEmployees();
    
  }
  openDialog(id:number) {
  
    const item1 = this.escalation2.find(i => i.id === id);
   
      const dialogRef = this.dialog.open(EscalationdialogComponent, {
        width: '300px',
        data:item1
        
            });
            dialogRef.afterClosed().subscribe(result => {
              console.log('dialog closed:${result}');
              this.dialogResult = result;
            });
    
    }
}

export interface Escalation {
  id: number;
  escalationType: number;



}
 
 /** An example database that the data source uses to retrieve data for the table. */
 export class ExampleHttpDao { 
  
 
   constructor(private http: HttpClient) {}
  
   getRepoIssues(page: number,records:number): Observable<Escalation[]> {
     const href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/esctype/search/'+ page + '/' + records;
    
 
     return this.http.get<Escalation[]>(href);
   }
 }
