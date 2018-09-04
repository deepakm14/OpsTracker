import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyfileService {
  apiUrl: string
  constructor() {
    
   }
setURL()
{
  return this.apiUrl = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080';
}
  
  
  
}
