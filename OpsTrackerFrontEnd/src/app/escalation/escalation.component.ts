import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from '../data.service';
import {Escalation} from '../models/escalation.model';
import { HttpClient } from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Dateformat } from '../dateformat.service';

@Component({
  selector: 'app-escalation',
  templateUrl: './escalation.component.html',
  styleUrls: ['./escalation.component.css']
})
export class EscalationComponent implements OnInit {
  communicatedvia: string[] = ['Phone', 'Email'];
  myControl = new FormControl();
  escalation$: Object;
  //esc2:Escalation[] = [];
  //public esc2={"typeOfEscalation":"","ommunicatedVia":""};
  esc2 = new Escalation();
  private newAttribute: any = {};
  isLoadingResults = false;
  constructor(private data: DataService, private http: HttpClient,private dateFormat: Dateformat) { }


  setEscalationtype(id:string)
  {
    console.log(id);
    this.esc2.typeOfEscalation = id;
  }

  setCommunicatedvia(id:string)
  {
    console.log(id);
    this.esc2.communicatedVia = id;
  }

postEscalationtracker(){

this.esc2.communicatedDate=this.dateFormat.convertdate(this.esc2.communicatedDate);
this.esc2.estimatedClosureDate=this.dateFormat.convertdate(this.esc2.estimatedClosureDate);
this.esc2.closureDate=this.dateFormat.convertdate(this.esc2.closureDate);

  this.isLoadingResults = true;
   
  this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/escalation', this.esc2)
  .pipe(
    startWith({}),
    switchMap(() => {
     
      
      return 'ok';

    }),
    map(data => {
      console.log('ggg');
      // Flip flag to show that loading has finished.
     
    
      return 'ok';
    }),
    catchError(() => {
      console.log('errr');
    
      return 'ok';
    })
  )
    .subscribe(
      (data:any) => { 
        if(data.length) {
          console.log(data);
         
        }
        
      },
      error => console.log("Error: ", error),
      () => {
        this.isLoadingResults = false;
        console.log('finished');
      }
    );

  }

  ngOnInit() {
    this.data.getEscalation().subscribe(
      data => this.escalation$ = data
    );
  }

}
