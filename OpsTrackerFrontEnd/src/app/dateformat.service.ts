import { Injectable} from '@angular/core';  

@Injectable({
    providedIn: 'root'
  })
export class Dateformat{
    convertdate(str): String{
    const date = new Date(str);
      const  mnth = ('0' + (date.getMonth()+1)).slice(-2);
       const day  = ('0' + date.getDate()).slice(-2);
        return [ day, mnth, date.getFullYear()].join("-");    
    
}
}