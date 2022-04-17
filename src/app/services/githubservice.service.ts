import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment } from '../../environments/environment';
//Access the githubAPiToken globally 
const httpOptions = {
  headers: new HttpHeaders({
    "Authorization":environment.githubApiToken
  })
}


@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {


  constructor(private http:HttpClient) { 

  }

  getData(userName: string): Observable<any> {
    const gitApi = `https://api.github.com/users/${userName}`;
    return this.http.get<any>(gitApi, httpOptions);
  }
  getRepo(userName: string): Observable<any> {
    const gitApi = `https://api.github.com/users/${userName}/repos`;
    return this.http.get<any>(gitApi, httpOptions);
  }
}
