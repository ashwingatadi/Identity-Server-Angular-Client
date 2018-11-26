import { Injectable } from '@angular/core';
import * as Oidc from 'oidc-client';


@Injectable()
export class AuthService{
    
    token: string = '';
    mgr: Oidc.UserManager;

    constructor(){
        var config = {
            authority: "http://localhost:5000/",
            client_id: "ng-dotconnect",
            redirect_uri: "http://localhost:4200/callback",
            silent_redirect_uri: "http://localhost:4200/callback",
            response_type: "id_token token",
            scope:"openid profile api1 api2.read_only",
            post_logout_redirect_uri : "http://localhost:4200/",
        };
        this. mgr = new Oidc.UserManager(config);
    }
    
    getUser(){
        return this.mgr.getUser();
    }

    signIn(){
        this.mgr.signinRedirect();
    }

    silentSignIn(){
        return this.mgr.signinSilent();
    }

    signOut() {
        this.mgr.signoutRedirect();
    }

    redirectCallback(){
        return this.mgr.signinRedirectCallback().catch((error)=>{console.log(error)});
    }
}