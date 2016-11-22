import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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

/*
 * Angular Firebase
 */
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';

// Initialize Firebase
export var firebaseConfig = {
  apiKey: "AIzaSyDDrc42huFLZqnG-pAg1Ly9VnFtVx3m-Cg",
  authDomain: "ecommerce-a99fc.firebaseapp.com",
  databaseURL: "https://ecommerce-a99fc.firebaseio.com",
  storageBucket: "ecommerce-a99fc.appspot.com",
};

@NgModule({
  imports: [HttpModule,
            AngularFireModule.initializeApp(firebaseConfig),
            BrowserModule, FormsModule, ReactiveFormsModule, 
            routing, CartModule, CategoryModule, ProductModule],
  declarations: [AppComponent, NavbarComponent, FooterComponent, 
                WelcomeComponent, CheckoutViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
