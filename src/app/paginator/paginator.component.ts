import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() numberofpages;
  pages:number[];
  @Output() pageNumberClicked  =new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.pages=new Array(this.numberofpages);
  }

  pageNumberSet(pagenumber:number){
    console.log(pagenumber)
    this.pageNumberClicked.emit(pagenumber);

  }

}
