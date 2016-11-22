import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CartMenuComponent} from './cart-menu.component';
import {CartService} from './cart.service';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    declarations: [CartMenuComponent],
    exports: [CartMenuComponent],
    providers: [CartService]
})
export class CartModule {}