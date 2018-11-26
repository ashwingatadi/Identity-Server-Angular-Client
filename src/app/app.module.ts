import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthService } from './auth-service/auth-service';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ApiresultComponent } from './apiresult/apiresult.component';



const appRoutes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'logout', component: SignOutComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'getAPIResult', component: ApiresultComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    CallbackComponent,
    SignOutComponent,
    ApiresultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
