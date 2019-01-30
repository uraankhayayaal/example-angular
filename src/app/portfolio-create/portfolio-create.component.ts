import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-portfolio-create',
  templateUrl: './portfolio-create.component.html',
  styleUrls: ['./portfolio-create.component.css']
})
export class PortfolioCreateComponent implements OnInit {

  portfolio: {};

  constructor(private  apiService:  ApiService) {
    this.portfolio = {
      title:  "",
      description:  "",
      photo:  "https://assets.gitlab-static.net/uploads/-/system/user/avatar/668646/avatar.png?width=90",
      isPublic:  true,
    }
  }

  ngOnInit() {
  }

  createPortfolio(){
    this.apiService.createPortfolio(this.portfolio).subscribe((response) => {
        console.log(response);
    });
  }

}
