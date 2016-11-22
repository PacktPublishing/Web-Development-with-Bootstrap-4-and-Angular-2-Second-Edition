import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<div class="container"> 
  <div class="page-header"> 
    <h2>Chapter 1 <small>Hello, World</small></h2> 
  </div> 
  <div class="jumbotron"> 
    <h1>Hello, {{name || 'World'}}</h1> 
    <input type="text" [(ngModel)]="name" class="form-control form-control-lg">
  </div> 
</div>
`})
export class AppComponent { 
	name: string = 'World';
}

