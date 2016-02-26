import {createStore} from 'fluxury'

const UserStore = createStore(
  'UserStore',
  undefined,
  {
    setProfile: (state, data) => data
  },
  {
    isLoggedIn: (state) => typeof state !== 'undefined'
  }
)

export default UserStore
