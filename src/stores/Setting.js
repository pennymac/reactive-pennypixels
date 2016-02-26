import {createStore} from 'fluxury'

const SettingStore = createStore(
  'SettingStore',
  {
    headerText: 'Identity Server Sample App'
  },
  {
    set: (state, action) => {
      console.log('set', action)
      return Object.assign({}, state, action.data)
    }
  },
  {
    get: (state, key) => state[key]
  }
)

export default SettingStore
