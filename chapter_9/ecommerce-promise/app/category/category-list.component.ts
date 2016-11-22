/*
 * Angular Imports
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

/*
 * Components
 */
import {Category, CategoryService} from './category.service';

@Component({
    selector: 'db-category-list',
    templateUrl: 'app/category/category-list.component.html'
})
export class CategoryListComponent implements OnInit {

    categories: Category[] = [];

    constructor(private router: Router, private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.categoryService.getCategories().then((categories: Category[]) => this.categories = categories);
    }

    filterProducts(category: Category) {
        this.router.navigate(['/products'], { queryParams: { category: category.id} });
    }
}

