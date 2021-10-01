import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient)
  {
  }

  serverResponse = '';

  callProxy()
  {
    const httpOptions = {
      responseType: 'html/text'
    };
    const request = {
      url: "https://angular.io/tutorial/toh-pt3"
    }

    this.http.post<any>('http://localhost:8080/proxy',
      request,
      httpOptions)
    .subscribe(response => {
      console.log(response)
      this.serverResponse = response
    })
  }
}
