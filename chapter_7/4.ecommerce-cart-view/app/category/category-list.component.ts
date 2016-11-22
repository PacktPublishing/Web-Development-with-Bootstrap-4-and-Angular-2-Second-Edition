/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

/*
 * Components
 */
import {Category, CategoryService} from './category.service';

@Component({
    selector: 'db-category-list',
    templateUrl: 'app/category/category-list.component.html'
})
export class CategoryListComponent {

    categories: Category[];

    constructor(private router: Router, private categoryService: CategoryService) {
        this.categories = this.categoryService.getCategories();
    }

    filterProducts(category: Category) {
        this.router.navigate(['/products'], { queryParams: { category: category.id} });
    }
}

