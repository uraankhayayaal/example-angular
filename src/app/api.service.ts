import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:3000';

  constructor(private  httpClient:  HttpClient) { }

  getSections(){
    return  this.httpClient.get(`${this.API_URL}/api/sections`);
  }

  createSection(section){
    return  this.httpClient.post(`${this.API_URL}/api/sections/`,section);
}

}
