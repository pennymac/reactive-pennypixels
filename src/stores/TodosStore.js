import { createStore } from 'fluxury';

export default createStore('TodosStore', [], {
  setTodo: (state, data) => {
    var newState = state.map(n => n)
    newState[data.id] = data
    return newState
  },
  markDone: (state, data) => state.map(n =>
    n.id === data ?
    Object.assign({}, n, { done: true}) : n),
  trashTodo: (state, data) => state.map(n =>
    n.id === data ?
    Object.assign({}, n, { __trash: true}) : n)
}, {
  getTodos: (state) => state,
  findTodo: (state, id) => state.filter(n => n.id === id)
})
