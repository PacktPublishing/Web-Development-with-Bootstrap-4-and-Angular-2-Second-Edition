/*
 * Angular Imports
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

/*
 * Components
 */
import {Category, CategoryService} from "./category.service";

@Component({
    selector: "db-category-list",
    template: require("./category-list.component.html")
})
export class CategoryListComponent implements OnInit {

    categories: Observable<Category[]>;

    constructor(private router: Router, private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.categories = this.categoryService.getCategories();
    }

    filterProducts(category: Category) {
        this.router.navigate(["/products"], { queryParams: { category: category.id} });
    }
}

