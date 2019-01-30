import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {};

  constructor(private  apiService:  ApiService) {
    this.user = {
      email:  "",
      password:  "",
    }
  }

  ngOnInit() {
  }

  login(){
    this.apiService.login(this.user).subscribe((response) => {
        console.log(response);
    });
  }

}
