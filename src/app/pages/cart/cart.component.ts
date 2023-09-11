import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { loadStripe } from "@stripe/stripe-js";
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

	constructor(private cartService: CartService, private http: HttpClient) {}

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
	onRemoveQuantity(item: CartItem): void {
		this.cartService.removeOneFromCart(item);
	}
	onAddQuantity(item: CartItem): void {
		this.cartService.addToCart(item);
	}
	onClearAll(): void {
		this.cartService.clearCart();
	}
	onCheckout(): void {
		this.http
			.post("http://localhost:4242/checkout", {
				items: this.cart.items,
			})
			.subscribe(async (res: any) => {
				let stripe = await loadStripe(
					"pk_test_51Np92RKMMabFiCg09owPfmXtB4qPptdmH59YtjVQruX2e2TUq5GGM7pRB166xuWew7kXCM8eABzeiQwmOW0GL8eF00TzoQLYMO"
				);
				stripe?.redirectToCheckout({
					sessionId: res.id,
				});
			});
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
