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
import { OpstrackermachinedialogComponent } from '../opstrackermachinedialog/opstrackermachinedialog.component';

@Component({
  selector: 'app-opsmachinetransaction',
  templateUrl: './opsmachinetransaction.component.html',
  styleUrls: ['./opsmachinetransaction.component.css']
})
export class OpsmachinetransactionComponent implements OnInit {
  @Input() public emp1: Employ;
  dialogResult="";
  itemsPerPage: number = 10;
  postsPerPage: number[] = [5, 10, 25];
id;
  emp:Employ[] = [];
    machine: Opsmachinetransaction[] = [];
  empid=new Employ();
   exampleDatabase: ExampleHttpDao | null;

  displayedColumns: string[] = ['id','machineType', 'equipmentType', 'modelNo','serialNo', 'status' , 'submitDate','complaintRaisedDate', 'resolutionDate','actionsColumn' ];
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
 console.log(data);
          return data;
        }),
        catchError(() => {
          console.log('errr');
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.machine = data['content']);
   // this.listEmployees();
  }
 openDialog(id:number) {
  
  const item1 = this.machine.find(i => i.id === id);
 
    const dialogRef = this.dialog.open(OpstrackermachinedialogComponent, {
      width: '300px',
      data:item1
      
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log('dialog closed:${result}');
            this.dialogResult = result;
          });
  
  }
}

export interface Opsmachinetransaction {
  id: number;
  machineType: string;
  equipmentType: string;
  modelNo : number;
  serialNo : number;
  status: string;
  submitDate:string;
  complaintRaisedDate: string;
  resolutionDate: string;
 }
 
 /** An example database that the data source uses to retrieve data for the table. */
 export class ExampleHttpDao { 
  
 
   constructor(private http: HttpClient) {}
  
   getRepoIssues(page: number,records:number): Observable<Opsmachinetransaction[]> {
     const href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/search/machinetransaction/'+ page + '/' + records;
    
 
     return this.http.get<Opsmachinetransaction[]>(href);
   }
 }