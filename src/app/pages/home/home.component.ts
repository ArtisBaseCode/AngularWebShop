import { Component, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

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
export class HomeComponent implements OnInit, OnDestroy {
	cols: number;
	category: string | undefined;
	rowHeight: number;
	products: Array<Product> | undefined;
	sort: string;
	count: string;
	productsSubscription: Subscription | undefined;

	constructor(
		private cartService: CartService,
		private storeService: StoreService
	) {
		this.cols = 3;
		this.rowHeight = ROWS_HEIGHT[this.cols];
		this.sort = "desc";
		this.count = "12";
	}

	ngOnInit(): void {
		this.getProducts();
	}
	ngOnDestroy(): void {
		if (this.productsSubscription) {
			this.productsSubscription.unsubscribe();
		}
	}

	getProducts(): void {
		this.productsSubscription = this.storeService
			.getAllProducts(this.count, this.sort, this.category)
			.subscribe((_products) => {
				this.products = _products;
			});
	}

	onColumnsCountChange(colNum: number): void {
		// console.log("Column Change");
		this.cols = colNum;
		this.rowHeight = ROWS_HEIGHT[this.cols];
	}

	onShowCategory(newCategory: string): void {
		// console.log("Home component onShowCategory", newCategory);
		this.category = newCategory;
		this.getProducts();
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
	onItemCountChange(count: number): void {
		this.count = count.toString();
		this.getProducts();
	}
	onSortUpdated(sort: string): void {
		this.sort = sort;
		this.getProducts();
	}
}
