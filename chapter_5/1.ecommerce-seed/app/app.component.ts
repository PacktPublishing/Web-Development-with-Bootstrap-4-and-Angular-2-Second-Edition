/*
 * Angular Imports
 */
import {Component} from '@angular/core';

import {Category} from './category/category';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  // Slide Categories
  slideCategories: Category[] = [
    { id: '1', title: 'Bakery', image: 'http://placehold.it/1110x480', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
    { id: '2', title: 'Takeaway', image: 'http://placehold.it/1110x480', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
    { id: '3', title: 'Dairy', image: 'http://placehold.it/1110x480', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks, horses.' },
  ];

  // Card categories
  cardCategories: Category[] = [
    { id: '1', title: 'Bakery', image: 'http://placehold.it/270x171', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
    { id: '2', title: 'Takeaway', image: 'http://placehold.it/270x171', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
    { id: '3', title: 'Dairy', image: 'http://placehold.it/270x171', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks, horses.' },
    { id: '4', title: 'Meat', image: 'http://placehold.it/270x171', desc: 'Only superior quality beef, lamb, and pork.' },
    { id: '5', title: 'Seafood', image: 'http://placehold.it/270x171', desc: 'Great place to buy fresh seafood.' },
    { id: '6', title: 'Fruit & Veg', image: 'http://placehold.it/270x171', desc: 'A variety of fresh fruits and vegetables.' },
  ];

  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }
}

