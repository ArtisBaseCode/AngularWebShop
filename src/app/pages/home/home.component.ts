import { Component, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';

const ROWS_HEIGHT: {[id: number]: number} = {
  1: 400,
  3: 335,
  4: 350,
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit{
  cols : number;
  category: string | undefined;
  rowHeight: number;


  constructor() {
    this.cols = 3;
    this.rowHeight = ROWS_HEIGHT[this.cols];

  }
  
  ngOnInit(): void {
    // console.log(this.rowHeight)
  }

  onColumnsCountChange(colNum: number): void {
    // console.log("Column Change");
    this.cols = colNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    // console.log("Home component onShowCategory", newCategory);
    this.category = newCategory;
  }

}
