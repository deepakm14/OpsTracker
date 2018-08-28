import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, NativeDateAdapter, DateAdapter} from '@angular/material';
import { MasterviewComponent } from './masterview/masterview.component';
import {MatTableModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MasterdataComponent } from '../app/masterdata/masterdata.component';

import {DataSource} from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import { EmplyeeviewComponent } from './emplyeeview/emplyeeview.component';
import { ClientviewComponent } from './clientview/clientview.component';
import { SiteviewComponent } from './siteview/siteview.component';
import { EscalationviewComponent } from './escalationview/escalationview.component';

import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { ClientupdateComponent } from './clientupdate/clientupdate.component';
import { SiteupdateComponent } from './siteupdate/siteupdate.component';
import { EscalationupdateComponent } from './escalationupdate/escalationupdate.component';

import { MatDialogModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PaginationComponent } from './pagination/pagination.component';
import {EmploydialogComponent} from './employdialog/employdialog.component';
import { ClientdialogComponent } from './clientdialog/clientdialog.component';
import { EscalationdialogComponent } from './escalationdialog/escalationdialog.component';
import { EscalationmainviewComponent } from './escalationmainview/escalationmainview.component';









@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    routingComponents,
    MasterviewComponent,
    MasterdataComponent,
    EmplyeeviewComponent,
    ClientviewComponent,
    SiteviewComponent,
    EscalationviewComponent,
   
    EmployeeupdateComponent,
    ClientupdateComponent,
    SiteupdateComponent,
    EscalationupdateComponent,
    PaginationComponent,
    EmploydialogComponent,
    ClientdialogComponent,
    EscalationdialogComponent,
    EscalationmainviewComponent
   

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressBarModule


  ],
  entryComponents: [
    EmploydialogComponent, ClientdialogComponent,EscalationdialogComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
