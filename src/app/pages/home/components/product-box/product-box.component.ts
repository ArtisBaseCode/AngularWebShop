import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
	selector: "app-product-box",
	templateUrl: "./product-box.component.html",
	styles: [],
})
export class ProductBoxComponent implements OnInit {
	@Input() fullWidthMode = false;
	@Output() addToCart = new EventEmitter();
	product: Product | undefined;
	constructor() {
		this.product = {
			id: 1,
			title: "Product1",
			price: 100,
			category: "Shoe",
			description: "Description",
			image: "https://via.placeholder.com/150",
		};
	}

	ngOnInit(): void {}
	onAddToCart(): void {
		this.addToCart.emit(this.product);
	}
}
