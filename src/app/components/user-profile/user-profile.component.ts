import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from 'src/app/services/githubservice.service';
import { Github } from 'src/app/classes/github';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile: any = '';
  user: Github;
  goToUrl(login){
    this.router.navigate(['/user-profile',login])
  }

  constructor(private usernameService:GithubserviceService,private router:Router) { }
  search(searchTerm: string) {
    if (searchTerm !== '') {
      this.usernameService.getData(this.profile).subscribe((data) => {
        console.log('User: ', data);
        this.user = data;
      });
      (this.profile = this.profile);
      return this.profile;
    }
  }

  ngOnInit(): void {
    this.search('');
  }

}
