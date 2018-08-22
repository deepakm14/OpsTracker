import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from '../data.service';


@Component({
  selector: 'app-escalation',
  templateUrl: './escalation.component.html',
  styleUrls: ['./escalation.component.css']
})
export class EscalationComponent implements OnInit {
  myControl = new FormControl();
  escalation$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEscalation().subscribe(
      data => this.escalation$ = data
    );
  }

}
