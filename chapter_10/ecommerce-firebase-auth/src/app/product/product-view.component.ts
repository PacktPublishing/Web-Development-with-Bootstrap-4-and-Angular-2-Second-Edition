/*
 * Angular Imports
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

/*
 * Components Imports
 */
import {Product, ProductService} from "./product.service";
import {Cart, CartItem, CartService} from "../cart/cart.service";

@Component({
    selector: "db-product-view",
    template: require("./product-view.component.html")
})
export class ProductViewComponent implements OnInit {

    product: Product;
    cartItem: CartItem;

    get quantity(): number {
        return this.cartItem ? this.cartItem.count : 0;
    }

    get amount(): number {
        return this.cartItem ? this.cartItem.amount : 0;
    }

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private cartService: CartService) { }

    ngOnInit(): void {
        this.route
            .params
            .subscribe(params => {
                // Get the product id
                let id: string = params["id"];
                // Return the product from ProductService
                this.productService.getProduct(id).subscribe((product: Product) => this.product = product);
                // Return the cart item
                this.cartItem = this.cartService.findItem(id);
            });
    }

    addToCart() {
        this.cartItem = this.cartService.addProduct(this.product);
    }

    removeFromCart() {
        this.cartItem = this.cartService.removeProduct(this.product);
    }
}

