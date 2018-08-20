import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-escalation',
  templateUrl: './escalation.component.html',
  styleUrls: ['./escalation.component.css']
})
export class EscalationComponent implements OnInit {
  myControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
