import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
@Component({
  selector: 'app-employdialog',
  templateUrl: './employdialog.component.html',
  styleUrls: ['./employdialog.component.css']
})
export class EmploydialogComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef<EmploydialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

  onCloseConfirm() {
this.thisdialogRef.close('Confirm');
  }

  onCloseCancel() {
this.thisdialogRef.close('Cancel');
  }

}
