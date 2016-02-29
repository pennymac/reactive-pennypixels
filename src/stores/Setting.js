import {createStore} from 'fluxury'

const SettingStore = createStore(
  'SettingStore',
  {
    headerText: 'Identity Server Sample App'
  },
  {
    setHeaderText: (state, text) =>
    Object.assign({}, state, { headerText: text })
  },
  {
    get: (state, key) => state[key]
  }
)

export default SettingStore
