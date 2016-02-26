import {createStore} from 'fluxury'

const SettingStore = createStore(
  'SettingStore',
  {
    headerText: 'Identity Server Sample App'
  },
  {
    set: (state, data) => {
      console.log('set', action)
      return Object.assign({}, state, data)
    }
  },
  {
    get: (state, key) => state[key]
  }
)

export default SettingStore
