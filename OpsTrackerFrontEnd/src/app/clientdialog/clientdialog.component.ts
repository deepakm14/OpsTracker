import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import { Client } from '../models/client.model';
@Component({
  selector: 'app-clientdialog',
  templateUrl: './clientdialog.component.html',
  styleUrls: ['./clientdialog.component.css']
})
export class ClientdialogComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef<ClientdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisdialogRef.close('Confirm');
      }
    
      onCloseCancel() {
    this.thisdialogRef.close('Cancel');
      }
}
