import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
	providedIn: "root",
})
export class CartService {
	cart = new BehaviorSubject<Cart>({ items: [] });

	constructor(private _snackBar: MatSnackBar) {}

	addToCart(item: CartItem): void {
		const items = [...this.cart.value.items];
		const itemInCart = items.find((_item) => _item.id === item.id);
		if (itemInCart) {
			itemInCart.quantity += 1;
		} else {
			items.push(item);
		}

		this.cart.next({ items });
		this._snackBar.open("1 item added to cart.", "Ok", { duration: 700 });
		console.log(this.cart.value);
	}
	removeOneFromCart(item: CartItem): void {
		const items = [...this.cart.value.items];
		const itemInCart = items.find((_item) => _item.id === item.id);
		if (itemInCart) {
			itemInCart.quantity -= 1;
			if (itemInCart.quantity <= 0) {
				this.removeFromCart(itemInCart);
				this._snackBar.open("Cart is cleared", "Ok", { duration: 1000 });
				return;
			}
			this._snackBar.open("1 item removed from cart", "Ok", { duration: 1000 });
		}
	}
	getTotal(items: CartItem[]): number {
		return items
			.map((item) => item.price * item.quantity)
			.reduce((prev, current) => prev + current, 0);
	}
	clearCart(): void {
		this.cart.next({ items: [] });
		this._snackBar.open("cart is cleared", "Ok", {
			duration: 1000,
		});
	}

	removeFromCart(item: CartItem): void {
		let count = 0;
		if (count === 0) {
			const filteredItems = this.cart.value.items.filter(
				(_item) => _item.id !== item.id
			);
			this.cart.next({ items: filteredItems });
			this._snackBar.open("1 item removed from cart", "Ok", {
				duration: 1000,
			});
			count = 0;
		}
	}
}
