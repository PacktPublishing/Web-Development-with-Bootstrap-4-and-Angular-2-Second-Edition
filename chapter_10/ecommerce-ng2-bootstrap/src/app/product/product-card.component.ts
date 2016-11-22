/*
 * Angular Imports
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";

/*
 * Components
 */
import {Product} from "./product.service";

@Component({
    selector: "db-product-card",
    template: require("./product-card.component.html")
})
export class ProductCardComponent {
    @Input() products: Product[];
    @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

    setClasses(product: Product) {
        return {
            "card-danger": product.isSpecial,
            "card-inverse": product.isSpecial
        };
    }

    buy(product: Product) {
        this.addToCart.emit(product);
    }
}

