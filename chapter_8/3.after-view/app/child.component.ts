import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
  <div class="child">
    Child is {{status}}
  </div>`,
  styles: [`
    .child {
      background: red;
      color: yellow;
    }
  `]
})
export class ChildComponent { 
  @Input() status: string = 'Not Ready';
}