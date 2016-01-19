import {dispatch} from 'fluxury'
import {getProfile} from './webutil'

// Actions
const setProfile = 'setProfile'

// Helper methods
export function loadProfile(){
  return getProfile()
  .then(profile => {
    dispatch(setProfile, profile)
    return Promise.resolve(profile)
  })
}

// Test & Debug only
window.loadProfile = loadProfile
