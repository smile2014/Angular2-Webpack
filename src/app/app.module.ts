import { NgModule } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { NavComponent } from './ui/nav.component';
import { FooterComponent } from './ui/footer.component';
import { NotFoundComponent } from './ui/not-found.component';

import { HomeComponent } from './containers/home.component';

import { ApiService } from './services/api.service';
import { GithubReposService } from './services/github-repos.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers:[
    Title,
    ApiService,
    GithubReposService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
