import {Component, Input, OnInit} from '@angular/core';

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
export class ChildComponent implements OnInit  { 
  @Input() desc: string = "You are mine";

  ngOnInit(): void {
    this.desc = "You are checked";
  }
}