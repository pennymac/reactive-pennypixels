import {createStore, dispatch} from 'fluxury';

let CountStore = createStore('CountStore', 0, {
  increment: (state) => state + 1,
  decrement: (state) => state - 1
});


// debug only
window.CountStore = CountStore

export default CountStore;
