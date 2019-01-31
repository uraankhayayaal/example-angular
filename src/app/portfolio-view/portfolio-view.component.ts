import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PortfolioModel } from '../models/portfolio.model';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {

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

}
