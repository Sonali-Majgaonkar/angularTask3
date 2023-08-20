import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoDataService } from '../shared/info-data.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit{
  addSection : any;

  constructor(private dataserv:InfoDataService){

  }

  ngOnInit(): void {
     this.addSection = new FormGroup({
      header : new FormControl('', Validators.required),
      details : new FormControl('', Validators.required)
     })
  }

  addSectionDetails(value:any){
    console.log("Button Work",value);
    this.dataserv.storeData(value); 
    this.addSection.reset()   
  }
}
