import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-section-create',
  templateUrl: './section-create.component.html',
  styleUrls: ['./section-create.component.css']
})
export class SectionCreateComponent implements OnInit {

  section: {};

  constructor(private  apiService:  ApiService) {
    this.section = {
      title:  "",
      description:  "",
      photo:  "https://assets.gitlab-static.net/uploads/-/system/user/avatar/668646/avatar.png?width=90",
      isPublic:  true,
    }
  }

  ngOnInit() {
  }

  createSection(){
    this.apiService.createSection(this.section).subscribe((response) => {
        console.log(response);
    });
  }
}
