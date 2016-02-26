import {dispatch} from 'fluxury'
import {getProfile} from './webutil'

export function setHeader(text) {
  dispatch('set', { headerText: text })
}

// Helper methods
export function loadProfile(){
  return getProfile()
  .then(profile => {
    dispatch('setProfile', profile)
    return Promise.resolve(profile)
  })
}
