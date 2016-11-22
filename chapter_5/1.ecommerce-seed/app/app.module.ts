import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Modules
 */
import { CategoryModule } from './category/category.module';

/*
 * Components
 */
import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [BrowserModule, CategoryModule],
  declarations: [AppComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
