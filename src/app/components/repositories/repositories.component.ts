import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from 'src/app/services/githubservice.service';
import { Repos } from 'src/app/classes/repos';
import { Github } from 'src/app/classes/github';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  profile: any = '';
  user: Github;
  repos: any;
  repo: Repos;
   

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
      });
      // error => {
      //   alert('User does not exist');
      // }
      
        (this.profile = '');
        error => {
            alert('User does not exist');
          }
    }
  }

  ngOnInit(): void {
    this.search('Lomemoraine');
  }
}
