import {createStore} from 'fluxury'

const UserStore = createStore(
  'UserStore',
  undefined,
  {
    setProfile: (state, data) => {
      console.log('setProfile', data)
      return data
    }
  },
  {
    isLoggedIn: (state) => typeof state !== 'undefined'
  }
)

window.UserStore = UserStore
export default UserStore
