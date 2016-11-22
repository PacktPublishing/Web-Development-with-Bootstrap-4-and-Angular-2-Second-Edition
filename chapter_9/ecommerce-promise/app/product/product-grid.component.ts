/*
 * Angular Imports
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

/*
 * Components
 */
import {Product, ProductService} from './product.service';
import {CartService} from '../cart/cart.service';

@Component({
    selector: 'db-product-grid',
    templateUrl: 'app/product/product-grid.component.html'
})
export class ProductGridComponent implements OnInit {
    products: any = [];

    constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {}

    ngOnInit(): void {
        this.route
            .queryParams
            .subscribe(params => {
                let category: string = params['category'];
                let search: string = params['search'];
                // Clear view before request
                this.products = [];
                // Return filtered data from getProducts function
                this.productService.getProducts(category, search).then((products: Product[]) => {
                    // Transform products to appropriate data
                    // to display
                    this.products = this.transform(products);
                });
            });
    }

    transform(source: Product[]) {
        let index = 0;
        let length = source.length;

        let products = [];

        while (length) {
            let row: Product[] = [];
            if (length >= 3) {
                for (let i = 0; i < 3; i++) {
                    row.push(source[index++]);
                }
                products.push(row);
                length -= 3;
            } else {
                for (; length > 0; length--) {
                    row.push(source[index++]);
                }
                products.push(row);
            }
        }

        return products;
    }

    addToCart(product:Product) {
        this.cartService.addProduct(product);
    }
}
