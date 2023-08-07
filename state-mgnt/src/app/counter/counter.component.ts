import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count: number;

  constructor() {
    this.count = 0;
  }

  increment() {this.count++}

  decrement() {(this.count <= 0) ? 0 : this.count--}

  reset() {this.count = 0}
}
