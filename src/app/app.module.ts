import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GithubShowComponent } from './components/github-show/github-show.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    RepositoriesComponent,
    NavBarComponent,
    GithubShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
