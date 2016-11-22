import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {CartItemCountComponent} from "./cart-item-count.component";
import {CartMenuComponent} from "./cart-menu.component";
import {CartViewComponent} from "./cart-view.component";
import {CartService} from "./cart.service";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    declarations: [CartItemCountComponent, CartMenuComponent, CartViewComponent],
    exports: [CartMenuComponent, CartViewComponent, CartItemCountComponent],
    providers: [CartService]
})
export class CartModule {}