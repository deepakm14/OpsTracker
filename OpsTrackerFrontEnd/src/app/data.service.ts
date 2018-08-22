import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employ } from './models/employ.model';
import { Escalation } from './models/escalation.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employ[]> {
  return this.http.get<Employ[]>('http://localhost:8080/uds/employee/search');
  }

  getEscalation(): Observable<Escalation[]> {
    return this.http.get<Escalation[]>('http://localhost:8080//uds/esctype/search');
    }
}
