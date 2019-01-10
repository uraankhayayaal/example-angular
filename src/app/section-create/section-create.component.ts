import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-section-create',
  templateUrl: './section-create.component.html',
  styleUrls: ['./section-create.component.css']
})
export class SectionCreateComponent implements OnInit {

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
  }

  createSection(){

    var section  = {
        title:  "This is the third section",
        description:  "Home N 333 Apartment 300",
        photo:  "This is the third section",
        isPublic:  true,
    };

    this.apiService.createSection(section).subscribe((response) => {
        console.log(response);
    });

  }
}
