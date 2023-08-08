import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {increment, decrement, reset} from "./counter.actions"

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    // connect the count stream from the store's count state
    this.count$ = store.select("count");
  }

  increment() {
    // dispatch the increment() action to the store
    this.store.dispatch(increment())
  }

  decrement() {
    // dispatch the decrement() action to the store
    this.store.dispatch(decrement())
  }

  reset() {
    // dispatch the reset() action to the store
    this.store.dispatch(reset())
  }
}
