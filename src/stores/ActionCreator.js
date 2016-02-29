import {dispatch} from 'fluxury'
import {getProfile} from './webutil'

export function setHeader(text) {
  dispatch('setHeaderText', text)
}

// Helper methods
export function loadProfile(){
  console.log('foo')
  return getProfile()
  .then(profile => {
    dispatch('setProfile', profile)
    return Promise.resolve(profile)
  })
}
