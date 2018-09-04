import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import { Employ } from '../models/employ.model';

@Component({
  selector: 'app-opstrackermaterialdialog',
  templateUrl: './opstrackermaterialdialog.component.html',
  styleUrls: ['./opstrackermaterialdialog.component.css']
})
export class OpstrackermaterialdialogComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef<OpstrackermaterialdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
 
  }

  onCloseConfirm() {
this.thisdialogRef.close('Confirm');
  }

  onCloseCancel() {
this.thisdialogRef.close('Cancel');
  }

}

