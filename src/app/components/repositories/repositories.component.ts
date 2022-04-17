import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from 'src/app/services/githubservice.service';
import { Repos } from 'src/app/classes/repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  profile: any ='';
  repos: any;
  repo: Repos;

  constructor(private repoService: GithubserviceService) { }
  search(searchTerm: string) {
    if (searchTerm !== '') {
     
      this.repoService.getRepo(this.profile).subscribe((data) => {
        console.log('Repo: ', data);
        this.repos = data;
      });
      (this.profile = '');
    }}
  ngOnInit(): void {
    this.search('');
  }

}
