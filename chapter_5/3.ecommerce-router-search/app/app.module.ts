import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy , PathLocationStrategy} from '@angular/common';

/**
 * Modules
 */
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
  imports: [BrowserModule, FormsModule, 
            routing, CategoryModule, ProductModule],
  declarations: [AppComponent, NavbarComponent, FooterComponent, 
                WelcomeComponent],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
