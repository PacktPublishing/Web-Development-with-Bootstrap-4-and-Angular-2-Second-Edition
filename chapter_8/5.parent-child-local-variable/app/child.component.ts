import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
  <div class="child">
    {{desc}}
  </div>`,
  styles: [`
    .child {
      background: red;
      color: yellow;
    }
  `]
})
export class ChildComponent { 
  @Input() desc: string;

  setDesc(value: string) {
    this.desc = value;
  }
}