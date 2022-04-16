import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user'

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  G_USER = 'https://'

  constructor(private http:HttpClient) { 

  }
  getUsers(): Observable<User>{
    return this.http.get(this.G_USER )

  }
}
