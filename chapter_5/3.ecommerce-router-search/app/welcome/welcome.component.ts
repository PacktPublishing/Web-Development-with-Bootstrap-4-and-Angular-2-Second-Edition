/*
 * Angular Imports
 */
import {Component} from '@angular/core';

/*
 * Components
 */
import {Category, getCategories, getCategory} from '../category/category';

@Component({
  selector: 'db-welcome',
  templateUrl: 'app/welcome/welcome.component.html'
})
export class WelcomeComponent {
  // Slide Categories
  slideCategories: Category[] = [getCategory('1'), getCategory('2'), getCategory('3')];

  // Card categories
  cardCategories: Category[] = getCategories();

  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }
}

