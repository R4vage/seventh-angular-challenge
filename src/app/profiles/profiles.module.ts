import { SpinnerInterceptor } from './../shared/interceptors/spinner.interceptors';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GithubPageComponent } from './components/github-page/github-page.component';
import { FormsModule } from '@angular/forms';
import { RepositoriesListComponent } from './components/repositories-list/repositories-list.component';
import { FollowersListComponent } from './components/followers-list/followers-list.component';



@NgModule({
  declarations: [
    ProfilesComponent,
    SearchBarComponent,
    GithubPageComponent,
    RepositoriesListComponent,
    FollowersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true} /* Probably not necessary to put multi here */
  ],
  exports: [
    ProfilesComponent
  ]  
})
export class ProfilesModule { }
