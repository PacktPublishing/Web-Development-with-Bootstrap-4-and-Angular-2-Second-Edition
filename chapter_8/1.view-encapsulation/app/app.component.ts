import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <my-parent title="Parent">
    <my-child></my-child>
    <my-child class="another"></my-child>
  </my-parent>`
})
export class AppComponent { }