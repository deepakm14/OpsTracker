import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employ } from './models/employ.model';
import { Escalation } from './models/escalation.model';
import { Project } from './models/project.model';
import { Site } from './models/site.model';
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

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:8080/uds/project/search');
  }

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>('http://localhost:8080/uds/site/search');
  }

  getSite(id): Observable<Site> {
    return this.http.get<Site>('http://localhost:8080/uds/site/search/' + id);
  }

  getemployee(pages, records): Observable<Employ[]> {
    
    return this.http.get<Employ[]>('http://localhost:8080//uds/employee/search/' + pages + '/' + records);
  }
  getemployeebyid(id): Observable<Employ> {
    
    return this.http.get<Employ>('http://localhost:8080//uds/employee/search/'+id);
  }
}
