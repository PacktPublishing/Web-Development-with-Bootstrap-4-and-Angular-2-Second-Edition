/*
 * Angular Imports
 */
import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";

/*
 * Components
 */
import {Category} from "./category.service";

@Component({
    selector: "db-category-card",
    template: require("./category-card.component.html")
})
export class CategoryCardComponent {
    @Input() category: Category;

    constructor(private router: Router) {}

    filterProducts(category: Category) {
        this.router.navigate(["/products"], { queryParams: { category: category.id} });
    }
}

