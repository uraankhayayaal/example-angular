import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from  '@angular/forms';
import { PortfolioModel } from '../models/portfolio.model';

@Component({
  selector: 'app-portfolio-create',
  templateUrl: './portfolio-create.component.html',
  styleUrls: ['./portfolio-create.component.css']
})
export class PortfolioCreateComponent implements OnInit {

  portfolio: PortfolioModel;
  // form: FormGroup;

  constructor(private  apiService:  ApiService, private formBuilder: FormBuilder) {
    this.portfolio = {
      id:  null,
      title:  "",
      description:  "",
      photo:  "https://assets.gitlab-static.net/uploads/-/system/user/avatar/668646/avatar.png?width=90",
      isPublic:  true,
      createdAt:  null,
      updatedAt:  null,
    };
  }

  ngOnInit() {
  }

  createPortfolio(){
    this.apiService.createPortfolio(this.portfolio).subscribe((data: PortfolioModel) => this.portfolio = {
      id: data['id'],
      title: data['title'],
      description: data['description'],
      photo: data['photo'],
      isPublic: data['isPublic'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    });
  }

}
