import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

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
    return  this.httpClient.get(`${this.API_URL}/api/sections`);
  }

  createSection(section){
    return  this.httpClient.post(`${this.API_URL}/api/sections/`,section);
  }

  /*
   * PORTFOLIO
   */
  getPortfolios(){
    return  this.httpClient.get(`${this.API_URL}/api/portfolios`);
  }

  createPortfolio(portfolio){
    return  this.httpClient.post(`${this.API_URL}/api/portfolios/`,portfolio);
  }

  /*
   * AUTH
   */
  login(user){
    return  this.httpClient.post(`${this.API_URL}/api/auth/login/`,user);
  }

}
