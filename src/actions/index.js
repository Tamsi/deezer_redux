const APP_ID = '249562';
const REDIRECT_URI = 'http://localhost:8080';
export const url = `https://connect.deezer.com/oauth/auth.php?app_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&perms=basic_access,email`;
let token = '';
//IL FAUT TROUVER LE BON ENDROIT OU EXPORT LE TOKEN POUR QUE LE BOUTON LOGIN MARCHE VRAIMENT
export function getToken() {
  const token_array = window.location.hash.substr(1).split('&').map(function (element) {
    return (element.split('='));
  }).filter(function (element) {
    return (element[0] === 'access_token');
  })
  if (typeof token_array[0] !== 'undefined')
    token = token_array[0][1];
}

export default token;
