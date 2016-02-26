import {createStore} from 'fluxury';
import {INC} from '../actions/CountActions';

let CountStore = createStore('CountStore', 0, (state, action) => {
  increment: (state) => state + 1,
  decrement: (state) => state - 1
});

export default CountStore;
