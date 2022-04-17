import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from 'src/app/services/githubservice.service';
import { Github } from 'src/app/classes/github';
import { Repos } from 'src/app/classes/repos';

@Component({
  selector: 'app-github-show',
  templateUrl: './github-show.component.html',
  styleUrls: ['./github-show.component.css']
})
export class GithubShowComponent implements OnInit {
profile: any = 'Lomemoraine';
  user: Github;
  repos: any;
  repo: Repos;
  error: any = null;

  constructor(private userService: GithubserviceService) {}
  search(searchTerm: string) {
    if (searchTerm !== '') {
      this.userService.getData(this.profile).subscribe((data) => {
        console.log('User: ', data);
        this.user = data;
      });
      this.userService.getRepo(this.profile).subscribe((data) => {
        console.log('Repo: ', data);
        this.repos = data;
      },
      error => {
        alert('User does not exist');
      });
      
        (this.profile = '');
    }
  }

  ngOnInit(): void {
    this.search('Lomemoraine');
  }
}
