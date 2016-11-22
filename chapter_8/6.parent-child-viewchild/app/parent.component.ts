import {Component, Input, AfterViewInit, AfterViewChecked, ViewChild} from '@angular/core';

import {ChildComponent} from './child.component';

@Component({
  selector: 'my-parent',
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

  @ViewChild(ChildComponent)
  private child: ChildComponent;

  ngAfterViewInit() {
    // The viewChild is set after the view has been initialized
    console.log("The viewChild is set", this.child.desc);
  }

  /**
   * The viewChild is updated after the view has been checked
   */
  ngAfterViewChecked() {
    console.log("The viewChild is checked", this.child.desc);
  }
}