import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  private  sections:  Array<object> = [];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getSections();
  }

  public  getSections(){
    this.apiService.getSections().subscribe((data:  Array<object>) => {
        this.sections  =  data;
        console.log(data);
    });
  }

}
