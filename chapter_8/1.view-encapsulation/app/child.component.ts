import {Component} from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
  <div class="child">
    Child
  </div>`,
  styles: [`
    .child {
      background: red;
      color: yellow;
    }
  `]
})
export class ChildComponent { }