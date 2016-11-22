import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CategoryListComponent} from './category-list.component';
import {CategoryCardComponent} from './category-card.component';
import {CategorySlideComponent} from './category-slide.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [CategoryListComponent, CategoryCardComponent, CategorySlideComponent],
    exports: [CategoryListComponent, CategoryCardComponent, CategorySlideComponent]
})
export class CategoryModule {}