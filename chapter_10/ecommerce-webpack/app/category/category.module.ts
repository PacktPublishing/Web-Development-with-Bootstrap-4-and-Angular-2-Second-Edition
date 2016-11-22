import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CategoryListComponent} from './category-list.component';
import {CategoryTitlePipe} from './category.pipe';
import {CategoryCardComponent} from './category-card.component';
import {CategorySlideComponent} from './category-slide.component';

import {CategoryService} from './category.service';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [CategoryListComponent, CategoryTitlePipe, CategoryCardComponent, CategorySlideComponent],
    exports: [CategoryListComponent, CategoryTitlePipe, CategoryCardComponent, CategorySlideComponent],
    providers: [CategoryService]
})
export class CategoryModule {}