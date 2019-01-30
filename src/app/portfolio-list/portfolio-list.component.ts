import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  private  portfolios:  Array<object> = [];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getPortfolios();
  }

  public getPortfolios(){
    this.apiService.getPortfolios().subscribe((data:  Array<object>) => {
        this.portfolios  =  data;
        console.log(data);
    });
  }

}
