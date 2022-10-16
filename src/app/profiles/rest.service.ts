import { SearchUsersResponse, User, Repository } from './../models/response.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

options = {
  headers: {
      Authorization: "token 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"
  }
}
  constructor(private http: HttpClient) {}

  searchUsers (searchValue:string) {
  return this.http.get<SearchUsersResponse>(`https://api.github.com/search/users?q=${searchValue}&per_page=5`, this.options);
  }
  
  getUser (userName:string) {
    return this.http.get<User> (`https://api.github.com/users/${userName}`, this.options);
  }

  getRepositories (userName:string, page:number) {
    return this.http.get<Repository[]> (`https://api.github.com/users/${userName}/repos?per_page=10&page=${page}`, this.options);
  }

  getAllRepositories (userName:string) {
    return this.http.get<Repository[]> (`https://api.github.com/users/${userName}/repos`, this.options);
  }

  getFollowers (userName:string, page:number) {
    return this.http.get<User[]> (`https://api.github.com/users/${userName}/followers?per_page=5&page=${page}`, this.options);
  }

  getAllFollowers (userName:string) {
    return this.http.get<User[]> (`https://api.github.com/users/${userName}/followers`, this.options);
  }

}
