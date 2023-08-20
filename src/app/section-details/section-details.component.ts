import { Component, OnInit } from '@angular/core';
import { InfoDataService } from '../shared/info-data.service';

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.css']
})
export class SectionDetailsComponent implements OnInit {
  sectionDetailsArr:any;

  constructor(private dataserv:InfoDataService){
  }
  ngOnInit(): void {
    this.dataserv.dataSub.subscribe(res=>{
      this.sectionDetailsArr = res;
      console.log('res',res);
      
    })
    console.log(this.sectionDetailsArr)
  }
}
