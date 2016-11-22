import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/**
 * Modules
 */
import {CartModule} from './cart/cart.module';
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';

/*
 * Components
 */
import {AppComponent}  from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';

/*
 * Routing
 */
import {routing}  from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, 
            routing, CartModule, CategoryModule, ProductModule],
  declarations: [AppComponent, NavbarComponent, FooterComponent, 
                WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
