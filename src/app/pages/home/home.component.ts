import { Component, OnInit, Output } from "@angular/core";
import { count } from "rxjs";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";

const ROWS_HEIGHT: { [id: number]: number } = {
	1: 400,
	3: 335,
	4: 350,
};

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styles: [],
})
export class HomeComponent implements OnInit {
	cols: number;
	category: string | undefined;
	rowHeight: number;

	constructor(private cartService: CartService) {
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

	onAddToCart(product: Product): void {
		this.cartService.addToCart({
			product: product.image,
			name: product.title,
			price: product.price,
			quantity: 1,
			id: product.id,
		});
	}
}
