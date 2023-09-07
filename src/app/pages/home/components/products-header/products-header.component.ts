import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './product-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort: string;
  itemsShowCount: number;
  constructor(){
    this.sort ='desc';
    this.itemsShowCount = 3;
  }

  onSortUpdated(s: string):void {
    this.sort = s;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
  onColumnsUpdated(colNum: number): void {
    this.columnsCountChange.emit(colNum);
  }
}
