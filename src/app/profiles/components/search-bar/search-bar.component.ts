import { Animations } from './../../../shared/animations/animations';
import { RestService } from './../../rest.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [
    Animations.fromTop
  ]
})
export class SearchBarComponent {
  name = ""
  timer = 0
  modalMessage = ""
  users: string[] = []
  userNotFound = false
  @Output() currentUserEmitter = new EventEmitter<string>();

  constructor(private restService: RestService) { 
  }

  setUsers (userName:string) {
    this.users = []
    if(userName.length > 0) {
      this.restService.searchUsers(userName).subscribe({
        next: (response) => { 
          if(response.total_count === 0) {
            this.userNotFound = true
          } else {
            this.users = []
            response.items.map(user => {this.users.push(user.login)})
            this.userNotFound = false
          }
        },
        error: (error) => {
          this.displayError("We couldnt fetch your search, please try again.")
        },
      })
    } 
  }

  changeCurrentUser(value: string) {
    this.currentUserEmitter.emit(value);
    this.clearSearch()
  }

  inputChange (event:string) {
    clearTimeout(this.timer)
    this.startTimer(this.timer, event)
  };

  startTimer (timer: any, event:string) {
    timer = setTimeout(
        () => {
          this.setUsers(event)
        }
    ,1200)
  };

  clearSearch() {
    this.users = []
    this.name = ""
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
