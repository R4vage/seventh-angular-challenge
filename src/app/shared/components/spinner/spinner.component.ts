import { SpinnerService } from './../../services/spinner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  isLoading$ = this.spinnerService.isLoading$
  constructor(private spinnerService: SpinnerService) { }
}
