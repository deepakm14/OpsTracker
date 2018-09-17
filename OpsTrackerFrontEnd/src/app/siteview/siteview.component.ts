import {Component, OnInit, ViewChild , Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  MatDialog,  MatDialogRef , MatDialogConfig , MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {DataService} from '../data.service';
import { Site } from '../models/site.model';
import { MatDialogModule } from '@angular/material';
import {SitemanpowerdialogComponent} from '../sitemanpowerdialog/sitemanpowerdialog.component';
import { ManPower } from '../models/manpower.model';
import { Material } from '../models/material.model';
import { Machine } from '../models/machine.model';
import { Sitemachinedialog } from '../models/sitemachinedialog.model';
import { Sitemanpowerdialog } from '../models/sitemanpowerdialog.model';
import { Sitematerialdialog } from '../models/sitematerialdialog.model';
import {SitematerialdialogComponent} from '../sitematerialdialog/sitematerialdialog.component';
import { SitemachinedailogComponent } from '../sitemachinedailog/sitemachinedailog.component';
import {SitedialogComponent} from '../sitedialog/sitedialog.component';
import { SitedeleteComponent } from '../sitedelete/sitedelete.component';
@Component({
  selector: 'app-siteview',
  templateUrl: './siteview.component.html',
  styleUrls: ['./siteview.component.css']
})
export class SiteviewComponent implements OnInit {
 // @Input() public emp1: Employ;
  dialogResult="";
  itemsPerPage: number = 10;
  postsPerPage: number[] = [5, 10, 25];
id;
  site:Site[] = [];
    site2: Sites[] = [];
    sitemanpowerdialog = new Sitemanpowerdialog();
    sitematerialdialog = new Sitematerialdialog();
    sitemachinedialog = new Sitemachinedialog();
 // empid=new Employ();
   exampleDatabase: ExampleHttpDao | null;

  displayedColumns: string[] = ['id',  'name' , 'contractType','actionsColumn' ];
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
 //console.log(data['totalElements']);
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
      ).subscribe(data => this.site2 = data['content']);
   // this.listEmployees();
  }


  openDialog(id:number) {
  
    const item1 = this.site2.find(i => i.id === id);
   
      const dialogRef = this.dialog.open(SitedialogComponent, {
        width: '300px',
        data:item1
        
            });
            dialogRef.afterClosed().subscribe(result => {
              console.log('dialog closed:${result}');
              this.dialogResult = result;
            });
    
    }



    openSiteDelete(id:number) {
  
      const item1 = id;
     
        const dialogRef = this.dialog.open(SitedeleteComponent, {
          width: '300px',
          data:item1
          
              });
              dialogRef.afterClosed().subscribe(result => {
                console.log('dialog closed:${result}');
                this.dialogResult = result;
              });
      
      }
 getmanpower(id:number) {
  
  //const item1 = this.site2.find(i => i.id === id);
  console.log(id);
  this.data1.getSitemanpower(id).subscribe(
    
    data => {
      this.sitemanpowerdialog=data['manPowerDTO'];
      console.log(this.sitemanpowerdialog);
      
      const dialogRef = this.dialog.open(SitemanpowerdialogComponent, {
        width: '600px',
        data:this.sitemanpowerdialog
        
            });
            dialogRef.afterClosed().subscribe(result => {
              console.log('dialog closed:${result}');
              this.dialogResult = result;
            });

    }
  );
  
 
    
  
  }
  getmaterial(id:number) {
  
    //const item1 = this.site2.find(i => i.id === id);
    console.log(id);
    this.data1.getSitematerial(id).subscribe(
      
      data => {
        this.sitematerialdialog=data['materialDTO'];
        console.log(this.sitematerialdialog);
        
        const dialogRef = this.dialog.open(SitematerialdialogComponent, {
          width: '600px',
          data:this.sitematerialdialog
          
              });
              dialogRef.afterClosed().subscribe(result => {
                console.log('dialog closed:${result}');
                this.dialogResult = result;
              });
  
      }
    );
    
   
      
    
    }


    getmachine(id:number) {
  
      //const item1 = this.site2.find(i => i.id === id);
      console.log(id);
      this.data1.getSitemachine(id).subscribe(
        
        data => {
          this.sitemachinedialog=data['machineDTO'];
          console.log(this.sitemachinedialog);
          
          const dialogRef = this.dialog.open(SitemachinedailogComponent, {
            width: '600px',
            data:this.sitemachinedialog
            
                });
                dialogRef.afterClosed().subscribe(result => {
                  console.log('dialog closed:${result}');
                  this.dialogResult = result;
                });
    
        }
      );
      
     
        
      
      }
}

export interface Sites {
  id: number;
   
    name: string;
    address: string;
    contractType: string;
   // regionalManagerId: number;
  //  seniorManagerId: number;
  //  asstSeniorManagerId: number;
   // siteInchargeId: number;
  //  manPowerDTO: Array<ManPower>;
  //  materialDTO: Array<Material>;
  //  machineDTO: Array<Machine>;
 }
 
 /** An example database that the data source uses to retrieve data for the table. */
 export class ExampleHttpDao { 
  
 
   constructor(private http: HttpClient) {}
  
   getRepoIssues(page: number,records:number): Observable<Sites[]> {
     const href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site/search/'+ page + '/' + records;
    console.log(href);
 
     return this.http.get<Sites[]>(href);
   }
 }
