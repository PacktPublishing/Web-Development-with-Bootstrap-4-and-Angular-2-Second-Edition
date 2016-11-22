import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

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
import {CheckoutViewComponent} from './checkout/checkout-view.component';

/*
 * Routing
 */
import {routing}  from './app.routes';

@NgModule({
  imports: [HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService),
            BrowserModule, FormsModule, ReactiveFormsModule, 
            routing, CartModule, CategoryModule, ProductModule],
  declarations: [AppComponent, NavbarComponent, FooterComponent, 
                WelcomeComponent, CheckoutViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
