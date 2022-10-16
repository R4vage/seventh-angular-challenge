import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss']
})
export class WarningModalComponent implements OnInit {
  @Input() warningMessage = ""
  constructor() { }

  ngOnInit(): void {
  }

}
