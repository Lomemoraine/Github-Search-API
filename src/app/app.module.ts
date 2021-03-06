import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GithubShowComponent } from './components/github-show/github-show.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { ReposComponent } from './components/repos/repos.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DatecountPipe } from './pipes/datecount.pipe';
import { ShortenstringPipe } from './pipes/shortenstring.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GithubShowComponent,
    NotFoundComponent,
    UserComponent,
    ReposComponent,
    HighlightDirective,
    DatecountPipe,
    ShortenstringPipe,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
