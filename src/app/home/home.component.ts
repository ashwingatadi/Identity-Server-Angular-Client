import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.getUser().then(function (user) {
      if (user) {
          console.log(user);
          //this.token = user.access_token;
          // debugger;
          console.log("Access Token:");
          console.log(user.access_token);
          console.log("-------------------------")
          console.log("Is User Session Expired:");
          console.log(user.expired);
          console.log("-------------------------")

          //console.log("User logged in", user.profile);
      }
      else {
          console.log("User not logged in");
      }
    });
  }

  // isUserExpired(){
  //   return this.authService.getUser().then(function (user) {
  //     new this.Promise((resolve, reject) => {
  //       resolve(user.expired);
  //     });
  //   });
  // }
  getNewToken(){
    this.authService.silentSignIn().then((o)=>{
      console.log(o);
    })
    
   
    
  }

}
