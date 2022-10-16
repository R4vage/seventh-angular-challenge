import { User } from './../../../models/response.models';
import { RestService } from './../../rest.service';
import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.scss']
})
export class FollowersListComponent {
  @Input() followers = 0
  @Input() set userName(userName: string) {
    this._userName = userName
    this.getFollowers(userName, 1)
  }
  currentPage = 1
  _userName = ""
  get userName() {
    return this._userName
  }
  modalMessage = ""
  followersArray : User[] = []
  constructor(private restService: RestService) { }

  changeCurrentPage (page:number) {
    this.currentPage = page
    this.getFollowers(this.userName, page)
  }

  getFollowers (userName: string, page: number) {
    this.restService.getFollowers(userName, page).subscribe({
      next: (response) => { 
        this.followersArray = response
      },
      error: () => {
        this.displayError("We couldnt fetch the user's followers. Please try again.")
      },
    })
  }

  getNumberOfPages (followers: number ) {
    if(followers > 5){
    return Math.ceil(followers/5)
    } else {
      return 0
    }
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
