import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*
 * Components
 */
import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
