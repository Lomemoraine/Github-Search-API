import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization":environment.githubApiToken
  })
}

@Injectable({
  providedIn: 'root'
})
export class GetuserService {
  private username = "Lomemoraine";

  constructor(private http:HttpClient) { }
  getUser() {
    const url = `https://api.github.com/users/${this.username}`;
    return this.http.get<any>(url);
  }
}
