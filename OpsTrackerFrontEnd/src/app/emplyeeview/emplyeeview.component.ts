import {Component, OnInit, ViewChild , Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  MatDialog,  MatDialogRef , MatDialogConfig , MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {DataService} from '../data.service';
import { Employ } from '../models/employ.model';
import { MatDialogModule } from '@angular/material';
import {EmploydialogComponent} from '../employdialog/employdialog.component';


@Component({
  selector: 'app-emplyeeview',
  templateUrl: './emplyeeview.component.html',
  styleUrls: ['./emplyeeview.component.css']
})


export class EmplyeeviewComponent implements OnInit {
   @Input() public emp1: Employ;
  dialogResult="";
  itemsPerPage: number = 10;
  postsPerPage: number[] = [5, 10, 25];
id;
  emp:Employ[] = [];
    emp2: Employees[] = [];
  empid=new Employ();
   exampleDatabase: ExampleHttpDao | null;

  displayedColumns: string[] = ['id','name', 'code',  'designation' , 'mail', 'mob', 'actionsColumn' ];
  /* //displayedColumns: string[] = [  'code', 'name', 'designation', 'mail' , 'phone']; */



  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  page: (Observable<number>|any);
  constructor(private http: HttpClient, private data1: DataService, private dialog: MatDialog) {

   }
   
  /*  listEmployees()
   {
     this.data.getemployee(0, 2).subscribe(
       data => this.emp = data['content']
      
      
     );
     console.log(this.data);
    
   } */
   /* pageChanged(event) {
    this.page = event.page;
    
    this.itemsPerPage = event.itemsPerPage;
    this.loadEmployeeByPage(this.page, this.itemsPerPage);
} */
/* loadEmployeeByPage(page: number, rows: number) {
 
  this.data.getemployee(page, rows).subscribe(
    data => this.emp = data['content']
  
    );

} */

   // tslint:disable-next-line:member-ordering


    /* openDialog() {
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      height: '400px',
  width: '600px'
      
    });
  }  */

  ngOnInit() {
     this.exampleDatabase = new ExampleHttpDao(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

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
      ).subscribe(data => this.emp2 = data['content']);
   // this.listEmployees();
  }
 openDialog(id:number) {
  
  const item1 = this.emp2.find(i => i.id === id);
 
    const dialogRef = this.dialog.open(EmploydialogComponent, {
      width: '300px',
      data:item1
      
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log('dialog closed:${result}');
            this.dialogResult = result;
          });
  
  }
 

 /* loadEmployeeforupdate(id:number) {
 

    this.data.getemployeebyid(id).subscribe(
    data => this.empid = data,
    error => console.log(error),
         () => {
    
          } 
    );
 // this.openDialog();
  

} */
  /* export interface Employdetails {
    created_at: string;
    number: string;
    state: string;
    title: string;
  }
 */

  
      
  }
/* export interface GithubApi {
  items: employees[];
 
}
 */


 

export interface Employees {
 id: number;
    code: number;
    designation: string;
    name: string;
    mail: string;
    mob: number;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao { 
 

  constructor(private http: HttpClient) {}
 
  getRepoIssues(page: number,records:number): Observable<Employees[]> {
    const href = 'http://localhost:8080/uds/employee/search/'+ page + '/' + records;
   

    return this.http.get<Employees[]>(href);
  }
}