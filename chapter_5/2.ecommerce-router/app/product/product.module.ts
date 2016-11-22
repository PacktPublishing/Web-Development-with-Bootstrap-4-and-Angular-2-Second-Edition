import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ProductListComponent} from './product-list.component';
import {ProductCardComponent} from './product-card.component';
import {ProductSearchComponent} from './product-search.component';
import {ProductGridComponent} from './product-grid.component';

import {CategoryModule} from '../category/category.module';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, CategoryModule],
    declarations: [ProductListComponent, ProductCardComponent, ProductSearchComponent, ProductGridComponent],
    exports: [ProductListComponent, ProductCardComponent, ProductSearchComponent, ProductGridComponent]
})
export class ProductModule {}