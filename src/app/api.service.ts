import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { PortfolioModel } from './models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:3000';
  API_TOKEN  =  '';

  constructor(private  httpClient:  HttpClient) { }

  /*
   * SECTION
   */
  getSections(){
    return this.httpClient.get(`${this.API_URL}/api/sections`);
  }

  createSection(section){
    return this.httpClient.post(`${this.API_URL}/api/sections/`,section);
  }

  /*
   * PORTFOLIO
   */
  getPortfolios(){
    return this.httpClient.get<Array<PortfolioModel>>(`${this.API_URL}/api/portfolios`);
  }

  getPortfolio(id){
    return this.httpClient.get<PortfolioModel>(`${this.API_URL}/api/portfolios/${id}`);
  }

  createPortfolio(portfolio){
    return this.httpClient.post<PortfolioModel>(`${this.API_URL}/api/portfolios/`,portfolio);
  }

  editPortfolio(id, portfolio){
    return this.httpClient.put<PortfolioModel>(`${this.API_URL}/api/portfolios/${id}`,portfolio);
  }

  deletePortfolio(id){
    return this.httpClient.delete(`${this.API_URL}/api/portfolios/${id}`);
  }

  /*
   * AUTH
   */
  login(user){
    return this.httpClient.post(`${this.API_URL}/api/auth/login/`,user);
  }

}
