import { Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-products-header",
	templateUrl: "./product-header.component.html",
	styles: [],
})
export class ProductsHeaderComponent {
	@Output() columnsCountChange = new EventEmitter<number>();
	@Output() itemsCountChange = new EventEmitter<number>();
	@Output() sortChange = new EventEmitter<string>();
	sort: string;
	itemsShowCount: number;
	constructor() {
		this.sort = "desc";
		this.itemsShowCount = 12;
	}

	onSortUpdated(s: string): void {
		this.sort = s;
		this.sortChange.emit(s);
	}

	onItemsUpdated(count: number): void {
		this.itemsShowCount = count;
		this.itemsCountChange.emit(count);
	}
	onColumnsUpdated(colNum: number): void {
		this.columnsCountChange.emit(colNum);
	}
}
