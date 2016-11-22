/*
 * Angular Imports
 */
import {Component, OnInit} from '@angular/core';

/*
 * Components
 */
import {Category, CategoryService} from '../category/category.service';

@Component({
  selector: 'db-welcome',
  templateUrl: 'app/welcome/welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  // Slide Categories
  slideCategories: Category[];

  // Card categories
  cardCategories: Category[];

  constructor(private categoryServics:CategoryService) {}

  ngOnInit(): void {
    this.categoryServics.getCategories().then((categories: Category[]) => {
      this.cardCategories = categories;
      //
      this.slideCategories = [
        categories[0],
        categories[1],
        categories[2]
      ];
    });
  }
}

