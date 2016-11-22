/*
 * Angular Imports
 */
import {Component} from '@angular/core';

/*
 * Components
 */
import {Product, getProducts} from './product';

@Component({
    selector: 'db-product-grid',
    templateUrl: 'app/product/product-grid.component.html'
})
export class ProductGridComponent {
    products: any = [];

    constructor() {
        let index = 0;
        let products: Product[] = getProducts();
        let length = products.length;

        this.products = [];

        while (length) {
            let row: Product[] = [];
            if (length >= 3) {
                for (let i = 0; i < 3; i++) {
                    row.push(products[index++]);
                }
                this.products.push(row);
                length -= 3;
            } else {
                for (; length > 0; length--) {
                    row.push(products[index++]);
                }
                this.products.push(row);
            }
        }
    }
}
