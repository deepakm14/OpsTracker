import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import { Escalation } from '../models/escalation.model';

@Component({
  selector: 'app-escalationdialog',
  templateUrl: './escalationdialog.component.html',
  styleUrls: ['./escalationdialog.component.css']
})
export class EscalationdialogComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef<EscalationdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisdialogRef.close('Confirm');
      }
    
      onCloseCancel() {
    this.thisdialogRef.close('Cancel');
      }
}
