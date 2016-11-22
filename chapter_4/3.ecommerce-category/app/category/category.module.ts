import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryCardComponent } from './category-card.component';
import { CategorySlideComponent } from './category-slide.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [CategoryCardComponent, CategorySlideComponent],
    exports: [CategoryCardComponent, CategorySlideComponent]
})
export class CategoryModule { }