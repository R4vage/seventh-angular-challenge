import { RestService } from './../../rest.service';
import { Repository } from './../../../models/response.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent{
  @Input() set userName(userName: string) {
    this._userName = userName
    this.setRepositories(userName, 1)
  }
  @Input() totalRepositories = 0
  repositories: Repository[] = []
  currentPage = 1
  _userName = ""
  get userName() {
    return this._userName
  }
  modalMessage = ""

  constructor(private restService : RestService) { }

  changeCurrentPage (page:number) {
    this.currentPage = page
    this.setRepositories(this.userName, page)
  }

  setRepositories(userName:string, page:number) {
    this.restService.getRepositories(userName,page).subscribe({
      next: (response) => { 
        this.repositories = response
      },
      error: (error) => {
        this.displayError("An error ocurred while fetching the repositories.")
      },
    })
  }

  getNumberOfPages (repositoriesAmount: number) {
    if(repositoriesAmount){
    return Math.ceil(repositoriesAmount/10)
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
