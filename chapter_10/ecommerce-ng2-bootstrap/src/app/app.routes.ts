/*
 * Angular Imports
 */
import { Routes, RouterModule } from "@angular/router";

/*
 * Guards
 */
import { AuthGuard } from "./auth/auth.module";

/*
 * Components
 */
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignInComponent} from "./auth/sign-in.component";
import { ProductListComponent } from "./product/product-list.component";
import { ProductViewComponent } from "./product/product-view.component";
import { CartViewComponent } from "./cart/cart-view.component";
import { CheckoutViewComponent } from "./checkout/checkout-view.component";

/*
 * Routes
 */
const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "login", component: SignInComponent },
  { path: "welcome", component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: "products", component: ProductListComponent, canActivate: [AuthGuard] },
  { path: "products/:id", component: ProductViewComponent, canActivate: [AuthGuard] },
  { path: "cart", component: CartViewComponent, canActivate: [AuthGuard] },
  { path: "checkout", component: CheckoutViewComponent, canActivate: [AuthGuard] },
];

/*
 * Routes Provider
 */
export const routing = RouterModule.forRoot(routes);
