import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import { Employ } from '../models/employ.model';

@Component({
  selector: 'app-sitemanpowerdialog',
  templateUrl: './sitemanpowerdialog.component.html',
  styleUrls: ['./sitemanpowerdialog.component.css']
})
export class SitemanpowerdialogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'typeOfService', 'planned', 'startTime','endTime'];
  
  constructor(public thisdialogRef: MatDialogRef<SitemanpowerdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisdialogRef.close('Confirm');
      }
    
      onCloseCancel() {
    this.thisdialogRef.close('Cancel');
      }
}
