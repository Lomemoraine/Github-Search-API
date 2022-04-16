import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
 private username = 'Lomemoraine'

  constructor(private http:HttpClient) { 

  }
  getUser(): Observable<any>{
    const GUSER = `https://api.github.com/users/${this.username}`;
    return this.http.get<any>(GUSER);

  }
}
