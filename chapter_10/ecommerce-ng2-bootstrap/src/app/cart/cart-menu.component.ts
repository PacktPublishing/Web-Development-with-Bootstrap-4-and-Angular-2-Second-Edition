/*
 * Angular Imports
 */
import { Component, Input } from "@angular/core";

/*
 * Components
 */
import { Cart, CartService } from "./cart.service";

@Component({
    selector: "db-cart-menu",
    template: require("./cart-menu.component.html")
})
export class CartMenuComponent {

    private cart: Cart;

    constructor(private cartService: CartService) {
        this.cart = this.cartService.cart;
    }
}

