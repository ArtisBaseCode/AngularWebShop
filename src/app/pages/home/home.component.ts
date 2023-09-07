import { Component, Output } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  cols : number;

  constructor() {
    this.cols = 3;
  }

  onColumnsCountChange(colNum: number): void {
    this.cols = colNum;
  }


}
