import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const  baseurl = `${environment.apiUrl}App`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client angular-app ';
  users: any;
  //const baseUrl = `${environment.apiUrl}/User`;
 

  constructor(private _http: HttpClient) { }
  ngOnInit() {
    this.getUsers();
  }




  getUsers() {
    this._http.get(`${baseurl}`).subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }

}

