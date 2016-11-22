import {Component, Input} from '@angular/core';

import {Product} from './product';

@Component({
    selector: 'db-product-card',
    templateUrl: 'app/product/product-card.component.html'
})
export class ProductCardComponent {
    @Input() products: Product[];

    setClasses(product: Product) {
        return {
            'card-danger': product.isSpecial,
            'card-inverse': product.isSpecial
        };
    }

    buy(product: Product) {
        console.log('We bought', product.title);
    }
}
