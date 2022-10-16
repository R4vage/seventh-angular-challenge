import { User } from './../../../models/response.models';
import { RestService } from './../../rest.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-page',
  templateUrl: './github-page.component.html',
  styleUrls: ['./github-page.component.scss']
})
export class GithubPageComponent {
  @Input() currentUser: User | null = null
  @Input() totalStars = 0
}
