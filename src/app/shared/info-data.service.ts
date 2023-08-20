import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoDataService {
  sectionInfo:any=[
    { header : 'Header' , details : 'details'}
  ]
  constructor() { }


  dataSub = new BehaviorSubject(this.sectionInfo.slice());

  storeData(obj:any){
    this.sectionInfo.push(obj);
    this.dataSub.next(this.sectionInfo.slice());
    console.log(this.sectionInfo)
  }

}
