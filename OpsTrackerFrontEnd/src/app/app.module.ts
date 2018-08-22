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
<<<<<<< HEAD
import { MasterviewComponent } from './masterview/masterview.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




=======
import { HttpClientModule } from '@angular/common/http';
import { MasterdataComponent } from '../app/masterdata/masterdata.component';
>>>>>>> 76645d2763b1fa864be9a3050c1f9ad02ec43f8d








@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    routingComponents,
<<<<<<< HEAD
    MasterviewComponent,
=======
    MasterdataComponent    
>>>>>>> 76645d2763b1fa864be9a3050c1f9ad02ec43f8d

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
<<<<<<< HEAD
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
=======
    FormsModule
>>>>>>> 76645d2763b1fa864be9a3050c1f9ad02ec43f8d

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
