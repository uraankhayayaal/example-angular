import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PortfolioModel } from '../models/portfolio.model';

@Component({
  selector: 'app-portfolio-edit',
  templateUrl: './portfolio-edit.component.html',
  styleUrls: ['./portfolio-edit.component.css']
})
export class PortfolioEditComponent implements OnInit {

  portfolio: PortfolioModel;

  constructor(private  apiService:  ApiService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getPortfolio();
  }

  getPortfolio(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.apiService.getPortfolio(id).subscribe((data: PortfolioModel) => this.portfolio = {
      id: data['id'],
      title: data['title'],
      description: data['description'],
      photo: data['photo'],
      isPublic: data['isPublic'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    });
  }

  editPortfolio(id): void {
    this.apiService.editPortfolio(id, this.portfolio).subscribe((data: PortfolioModel) => this.portfolio = {
      id: data['id'],
      title: data['title'],
      description: data['description'],
      photo: data['photo'],
      isPublic: data['isPublic'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    });
  }

  deletePortfolio(id): void {
    this.apiService.deletePortfolio(id).subscribe((data: PortfolioModel) => this.portfolio = null);
  }

}
