import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public currentCounter = 0;
  constructor() {}
  public incrementCounter() {
    this.currentCounter++;
  }
}
