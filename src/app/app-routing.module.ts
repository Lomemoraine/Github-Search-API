import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubShowComponent } from './components/github-show/github-show.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: GithubShowComponent},
  {path: 'repositories', component:RepositoriesComponent },
  {path: 'user-profile', component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
