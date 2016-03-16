import {createStore, dispatch} from 'fluxury';

let CounterStore = createStore(
  'Counter Store', 0, {
  increment: (state) => state + 1,
  decrement: (state) => state - 1
});

window.dispatch = dispatch
window.CounterStore = CounterStore
export default CounterStore;
