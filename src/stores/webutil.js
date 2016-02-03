export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

let baseURL = 'not loaded'

// export function getProfile(){
//
//   return fetch( baseURL + '/oauth/v1/profile',
//     { mode: 'cors',
//       headers: { 'Authorization': 'Bearer ' + getCookie('oauth2-grant-token') }
//     })
//     .then(n => n.json())
// }

export function getProfile(){
  return fetch( '/profile.json',
    { credentials: 'include' })
    .then(n => n.json())
}

export function getIdentityServerUrl() {
  return fetch('/identity_server')
  .then( n => n.text() )
  .then( n => {
    baseURL = n;
    return Promise.resolve(true)
  })
}

window.getCookie = getCookie
window.getProfile = getProfile
window.getIdentityServerUrl = getIdentityServerUrl
