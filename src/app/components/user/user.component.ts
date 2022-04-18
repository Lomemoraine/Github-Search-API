import { Component, OnInit } from '@angular/core';
import{ UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string;
  profile: {name: string; followers: number; login: string; company: string; avatar_url: string; bio: string; public_repos: number; html_url: string; public_gists: number; following: number; created_at: string; updated_at: string;}
  constructor(private userService: UserServiceService) {
   
   }
   findProfile() {
    this.userService.updateProfile(this.username)
    this.userService.getProfileInfo().subscribe((profile =>{
      console.log(profile)
      this.profile = profile
    }))
  }

  ngOnInit(): void {
  }

}


