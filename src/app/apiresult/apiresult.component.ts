import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth-service/auth-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apiresult',
  templateUrl: './apiresult.component.html',
  styleUrls: ['./apiresult.component.css']
})
export class ApiresultComponent implements OnInit {
  response;
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  ngOnInit() {

    this.getAccessToken().subscribe(token => {
    
      
      if(token){
        this.httpClient.get('http://localhost:5002/identity', {
        headers: new HttpHeaders({
          "Authorization": "bearer " + token
          })
        }).subscribe((response)=>{
          this.response = response;
          console.log(this.response);
        })
      }

    })
    
  }

  getAccessToken(): Observable<string> {
    return new Observable((observer)=> {
      this.authService.getUser().then(user => {
        if(user && !user.expired && user.access_token){
          observer.next(user.access_token);
          observer.complete();
        }
      observer.next('');
      observer.complete();
      })
    })
  }
  
}
