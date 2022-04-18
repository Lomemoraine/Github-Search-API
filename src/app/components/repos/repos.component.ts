import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any[];
  repository: {name: string; full_name: string; description: string; language: string; homepage: string; html_url: string;}

  constructor(private userService: UserServiceService) {

    this.userService.getProfileRepos().subscribe((repos) => {
      this.repos = repos;
    })
   }

  ngOnInit(): void {
  }

}