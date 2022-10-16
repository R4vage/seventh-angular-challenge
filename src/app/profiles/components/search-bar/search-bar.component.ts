import { Animations } from './../../../shared/animations/animations';
import { RestService } from './../../rest.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
    let timer
    const startTimer = () => {
      timer = setTimeout(
        () => {
          this.setUsers(event)
        }
      ,700)
    }
    clearTimeout(timer)
    startTimer()
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
