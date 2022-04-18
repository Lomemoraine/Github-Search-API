import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubShowComponent } from './components/github-show/github-show.component';
import{ UserComponent }from './components/user/user.component';
import { ReposComponent } from './components/repos/repos.component';

import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: 'github-show', component: GithubShowComponent},
  {path:'user' , component: UserComponent},
  {path:'repos' , component:ReposComponent},

  // { path: 'user-profile/:login', component:  RepositoriesComponent },
  { path: '', redirectTo:"/github-show", pathMatch:"full"},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
