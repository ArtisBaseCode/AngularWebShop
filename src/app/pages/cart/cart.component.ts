import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";

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

	ngOnInit(): void {
		this.dataSource = this.cart.items;
	}

	getTotal(items: Array<CartItem>): number {
		return items
			.map((item) => item.price * item.quantity)
			.reduce((prev, current) => prev + current, 0);
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
