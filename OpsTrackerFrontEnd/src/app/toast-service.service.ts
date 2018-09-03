import { Injectable } from '@angular/core';
declare var toastr:any; 
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
Success(tittle:string,message?:string){
  toastr.success(tittle,message);
}

}
