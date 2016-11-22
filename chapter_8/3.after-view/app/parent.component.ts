import {Component, Input, AfterViewInit, AfterViewChecked, ViewChild, ChangeDetectionStrategy} from '@angular/core';

import {ChildComponent} from './child.component';

@Component({
  selector: 'my-parent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="parent">
    <div class="parent__title">
     {{title}}
    </div>
    <div class="parent__content">
        <my-child></my-child>
    </div>
  </div>`,
  styles: [`
    .parent {
      background: green;
      color: white;
    }
  `]
})
export class ParentComponent implements AfterViewInit, AfterViewChecked {
  @Input() title: string;

  // Query for a VIEW child of type `ChildComponent`
  @ViewChild(ChildComponent) viewChild: ChildComponent;

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    console.log('AfterViewInit. Child is', this.viewChild.status);
    this.title = 'Parent';
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked. Child is', this.viewChild.status);
    // viewChild is updated after the view has been checked
    if (this.viewChild.status == 'Ready') {
      console.log('AfterViewChecked (no change)');
    } else {
      this.viewChild.status = 'Ready';
    }
  }
}