import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { PortfolioModel } from '../models/portfolio.model';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  private  portfolios:  Array<PortfolioModel>;

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getPortfolios();
  }

  public getPortfolios(){
    this.apiService.getPortfolios().subscribe((data:  Array<PortfolioModel>) => {
      var portfolios = [];
      data.map((item: PortfolioModel) => {
        portfolios.push(item);
      })
      this.portfolios = portfolios;
    });
  }

  public showInfo(id){
    console.log(id)
  }

}
