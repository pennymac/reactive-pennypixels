import {dispatch} from 'fluxury'
import {getProfile} from './webutil'

export function setHeader(text) {
  dispatch('setHeaderText', text)
}

window.setHeader = setHeader

// Helper methods
export function loadProfile(){
  return getProfile()
  .then(profile => {
    dispatch('setProfile', profile)
    return Promise.resolve(profile)
  })
}
