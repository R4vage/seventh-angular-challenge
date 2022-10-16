import { Animations } from './../shared/animations/animations';
import { User, Repository } from './../models/response.models';
import { RestService } from './rest.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  animations: [
    Animations.fromLeftToRight
  ],
  providers: [
    RestService
  ]
})
export class ProfilesComponent {
  currentUser: User | null = null
  repositories = 0
  userName: string = ""
  followers: number = 0
  modalMessage = ""
  totalStars = 0
  constructor(private restService: RestService) { }



  changeCurrentUser(event:string) {
    this.repositories = 0
    this.currentUser = null
    this.userName = event
    this.restService.getUser(event).subscribe({
      next: (response) => { 
        if (response.followers) {
          this.followers = response.followers
          this.repositories = response.public_repos
          if (response.public_repos > 0) {
            this.getTotalStars(event)
          }
        } else {
          this.followers = 0
        }
        this.currentUser = response
      },
      error: (error) => {
        this.displayError("We couldn't fetch the user, please try again.")
      },
    })
  }

  getTotalStars (userName: string) {
    this.restService.getAllRepositories(userName).subscribe({
      next: (response) => { 
        let count = 0  
        response.map(repository => {
          if(repository.stargazers_count){
          count = count + repository.stargazers_count}
        })
        this.totalStars = count
      },
      error: (error) => {
        this.displayError("We couldn't fetch the total amount of stars")
      },
    })
  }

  displayError (message: string) {
    this.modalMessage = message
    setTimeout(
      () => {
        this.modalMessage = ""
      }
    ,5000)
  }
}
