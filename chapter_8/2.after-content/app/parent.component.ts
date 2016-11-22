import {Component, Input, AfterContentInit, AfterContentChecked, ContentChild} from '@angular/core';

import {ChildComponent} from './child.component';

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
  </div>`,
  styles: [`
    .parent {
      background: green;
      color: white;
    }
  `]
})
export class ParentComponent implements AfterContentInit, AfterContentChecked {
  @Input() title: string;

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild: ChildComponent;

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    console.log('AfterContentInit. Child is', this.contentChild.status);
    this.title = 'Parent';
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked. Child is', this.contentChild.status);
    // contentChild is updated after the content has been checked
    if (this.contentChild.status == 'Ready') {
      console.log('AfterContentChecked (no change)');
    } else {
      this.contentChild.status = 'Ready';
    }
  }
}