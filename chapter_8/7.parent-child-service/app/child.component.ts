import {Component, Input, OnDestroy} from '@angular/core';

import {Subscription}    from 'rxjs/Subscription';

import {CommonService} from './common.service';

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
export class ChildComponent implements OnDestroy{ 
  @Input() desc: string;

  subscription: Subscription;

  constructor(private common: CommonService) {
    this.subscription = this.common.childQueue.subscribe(
      message => {
        this.desc = message;
      }
    );
  }

  ngOnDestroy() {
    // Clean after yourself
    this.subscription.unsubscribe();
  }
}