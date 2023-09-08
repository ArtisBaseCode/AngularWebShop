import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
	selector: "app-cart",
	templateUrl: "./cart.component.html",
	styles: [],
})
export class CartComponent implements OnInit {
	cart: Cart = {
		items: [
			{
				product: "https://via.placeholder.com/150",
				name: "Adidas",
				price: 135,
				quantity: 3,
				id: 2,
			},
			{
				product: "https://via.placeholder.com/150",
				name: "Nike",
				price: 150,
				quantity: 2,
				id: 1,
			},
		],
	};

	dataSource: Array<CartItem> = [];
	displayedColumns: Array<string> = [
		"product",
		"name",
		"price",
		"quantity",
		"total",
		"action",
	];

	constructor(private cartService: CartService) {}

	ngOnInit(): void {
		this.dataSource = this.cart.items;
		this.cartService.cart.subscribe((_cart: Cart) => {
			this.cart = _cart;
			this.dataSource = this.cart.items;
		});
	}

	getTotal(items: Array<CartItem>): number {
		return this.cartService.getTotal(items);
	}

	onRemoveFromCart(item: CartItem): void {
		this.cartService.removeFromCart(item);
	}

	// Nuk Funksionon... Duhet me permirsu
	// getTotalPerProduct(name: string): number{
	//   console.log
	//   let result: number = 0;
	//   this.cart.items.map((item) => {
	//     if(item.name === name){
	//       result = item.price * item.quantity;
	//     }
	//     else{
	//       result = 0;
	//     }
	//   });
	//   return result;
	// }
}
