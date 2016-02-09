import {createStore} from 'fluxury'

const UserStore = createStore(
  'UserStore',
  undefined,
  {
    setProfile: (state, action) => action.data
  },
  {
    isLoggedIn: (state, action) => typeof state !== 'undefined'
  }
)

export default UserStore