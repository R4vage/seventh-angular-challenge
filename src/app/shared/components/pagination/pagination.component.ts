import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() set pages(pages:number) {
    for (let i = 1; i<= pages; i++) { 
      this.pagesArray.push(i)
    }
  }
  @Input() currentPage: number = 0 
  @Output() currentPageEmitter = new EventEmitter<number>();
  pagesArray: number[] = []

  constructor() { }

  ngOnInit(): void {
  }
  changeCurrentPage(value: number) {
    if(value !== this.currentPage){
      this.currentPageEmitter.emit(value);
    }
  }
}
