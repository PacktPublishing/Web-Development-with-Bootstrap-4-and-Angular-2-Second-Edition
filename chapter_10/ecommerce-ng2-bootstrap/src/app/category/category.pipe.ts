/*
 * Angular Imports
 */
import {Pipe, PipeTransform} from "@angular/core";

/*
 * Components Imports
 */
import {Category, CategoryService} from "./category.service";

/*
 * Return category title of the value
 * Usage:
 *   value | categoryTitle
 * Example:
 *   {{ categoryId |  categoryTitle }}
 *   presume categoryId="1"
 *   result formats to "Bread & Bakery"
*/
@Pipe({ name: "categoryTitle" })
export class CategoryTitlePipe implements PipeTransform {

    constructor(private categoryService: CategoryService) { }

    transform(value: string): string {
        let category: Category = this.categoryService.getCategory(value);
        return category ? category.title : "";
    }
}
