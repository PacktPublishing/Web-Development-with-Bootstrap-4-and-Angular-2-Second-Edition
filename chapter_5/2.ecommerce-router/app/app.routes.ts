/*
 * Angular Imports
 */
import {Routes, RouterModule} from '@angular/router';

/*
 * Components
 */
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent} from './product/product-list.component';

/*
 * Routes
 */
const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  //{ path: 'products/:id', component: ProductComponent }
];

/*
 * Routes Provider
 */
export const routing = RouterModule.forRoot(routes);
