import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private username: string;
  private clientSecret: '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';
  constructor(private httpClient:HttpClient) {
    this.username='Lomemoraine';
   }
   getProfileInfo(){
     var profile= this.httpClient.get("https://api.github.com/users/" + this.username)
     .pipe(map((response: any)=>response));
     console.log(profile)
     return profile
   }

   getProfileRepos(){
    var repos= this.httpClient.get("https://api.github.com/users/" + this.username + "/repos")
    .pipe(map((response: any)=>response));
    return repos;
   }
   updateProfile(username: string){
     this.username= username
   }
}