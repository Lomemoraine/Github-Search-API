import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from 'src/app/services/githubservice.service';
import { Github } from 'src/app/classes/github';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile: any = '';
  user: Github;

  constructor(private usernameService:GithubserviceService) { }
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
