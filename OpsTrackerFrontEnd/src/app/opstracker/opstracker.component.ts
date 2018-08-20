import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-opstracker',
  templateUrl: './opstracker.component.html',
  styleUrls: ['./opstracker.component.css']
})
export class OpstrackerComponent implements OnInit {
  myControl = new FormControl();
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }
  ngOnInit() {
  }

}
