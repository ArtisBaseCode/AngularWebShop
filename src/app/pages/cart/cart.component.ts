import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit{
  cart: Cart = { items: [{
    product: 'https://via.placeholder/150',
    name: 'Nike',
    price: 150,
    quantity: 2,
    id: 1
  }]};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }


}
