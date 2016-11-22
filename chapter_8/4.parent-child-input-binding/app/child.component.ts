import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
  <div class="child">
    {{desc}} belongs to {{parent}} with {{emoji}}
  </div>`,
  styles: [`
    .child {
      background: red;
      color: yellow;
    }
  `]
})
export class ChildComponent implements OnInit { 
  @Input() desc: string;
  @Input('owner') parent: string;
  private _emoji: string;
  @Input() set emoji(value: string) {
    this._emoji = value || 'happy';
  }
  get emoji(): string {
    return this._emoji;
  }

  @Output() status: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.status.emit('Ready');
  }
}