import {Component, Input, OnInit} from '@angular/core';

import {CommonService} from './common.service';

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
  `],
  providers: [CommonService],
})
export class ParentComponent implements OnInit {
  @Input() title: string;

  constructor(private common: CommonService) {
    this.common.parentQueue.subscribe(
      message => {
        this.title = message;
      }
    );
  }

  ngOnInit() {
    this.common.toChild("You are mine");
  }
}