import {Component, OnInit, ViewChild} from '@angular/core';
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
  dialogResult="";
  itemsPerPage: number = 10;
  postsPerPage: number[] = [5, 10, 25];
id;
  emp = new Employ();

  displayedColumns: string[] = ['id','name', 'code',  'designation' , 'mail', 'mob', 'actionsColumn' ];
  /* //displayedColumns: string[] = [  'code', 'name', 'designation', 'mail' , 'phone']; */



  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  page: (Observable<number>|any);
  constructor(private http: HttpClient, private data: DataService, private dialog: MatDialog) {

   }
   
   listEmployees()
   {
     this.data.getemployee(0, 2).subscribe(
       data => this.emp = data['content']
      
      
     );
     console.log(this.data);
    
   }
   pageChanged(event) {
    this.page = event.page;
    
    this.itemsPerPage = event.itemsPerPage;
    this.loadEmployeeByPage(this.page, this.itemsPerPage);
}
loadEmployeeByPage(page: number, rows: number) {
 
  this.data.getemployee(page, rows).subscribe(
    data => this.emp = data['content']
  
    );

}

   // tslint:disable-next-line:member-ordering


   /* openDialog() {
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      height: '400px',
  width: '600px'
      
    });
  } */

  ngOnInit() {
   
    this.listEmployees();
  }
 openDialog() {
  
  
    const dialogRef = this.dialog.open(EmploydialogComponent, {
      width: '300px',
      data:'gjkhjkhjkh'
      
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log('dialog closed:${result}');
            this.dialogResult = result;
          });
  
  }
 

 loadEmployeeforupdate(id:number) {
 
    this.data.getemployeebyid(id).subscribe(
    data => this.emp = data,
    error => console.log(error),
         () => {
     this.openDialog()
          } 
    );
  
  

}
  /* export interface Employdetails {
    created_at: string;
    number: string;
    state: string;
    title: string;
  }
 */

  
      
  }