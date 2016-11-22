import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-parent',
  template: `
  <div class="parent" [ngInit]="child.setDesc('You are mine')">
    <div class="parent__title">
     {{title}}
    </div>
    <div class="parent__content">
        <my-child #child></my-child>
    </div>
  </div>`,
  styles: [`
    .parent {
      background: green;
      color: white;
    }
  `]
})
export class ParentComponent {
  @Input() title: string;
}