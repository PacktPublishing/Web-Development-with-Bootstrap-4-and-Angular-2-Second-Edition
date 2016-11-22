/*
 * Angular Imports
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'db-cart-item-count',
    templateUrl: 'app/cart/cart-item-count.component.html'
})
export class CartItemCountComponent {

    @Input() name: string;
    @Input() count: string;
    @Output() countChanged:EventEmitter<string> = new EventEmitter<string>();

    update(value: string) {
        this.count = value;
        this.countChanged.emit(value);
    }
}

