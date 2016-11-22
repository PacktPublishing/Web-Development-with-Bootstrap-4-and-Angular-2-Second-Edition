import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-parent',
  template: `
  <div class="parent">
    <div class="parent__title">
     {{title}}
    </div>
    <div class="parent__content">
        <ng-content></ng-content>
    </div>
    <div class="parent__content">
        <ng-content select=".another"></ng-content>
    </div>
  </div>`,
  styles: [`
    .parent {
      background: green;
      color: white;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ParentComponent {
  @Input() title: string;
}