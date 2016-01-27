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

let baseURL = 'http://secure.pennymacusa-dev.com'
// let baseURL = 'http://secure2.pennymacusa-dev.com'
// let baseURL = 'http://localhost:8000'

export function getProfile(){

  return fetch( baseURL + '/oauth/v1/profile',
    { mode: 'cors',
      headers: { 'Authorization': 'Bearer ' + getCookie('PNMAC-Token') }
    })
    .then(n => n.json())
}

window.getCookie = getCookie
window.getProfile = getProfile
