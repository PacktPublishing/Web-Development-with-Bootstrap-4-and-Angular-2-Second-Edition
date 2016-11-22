import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-parent',
  template: `
  <div class="parent">
    <div class="parent__title">
     {{title}}. Child is {{status}}
    </div>
    <div class="parent__content">
        <my-child [desc]="'Child'" [owner]="title" [emoji]="'pleasure'" (status)="onStatus($event)"></my-child>
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
  status: string;

  onStatus(value: string) {
    this.status = value;
  }
}