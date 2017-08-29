import axios from 'axios';
import { token } from './index';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';

export function fetchAlbums(artist) {
  const url = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/${artist.id}/albums`;
  const auth = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const request = axios.get(url, 
    auth
  ).then(function(list) {
    return list.data;
  });

  return {
    type: FETCH_ALBUMS,
    payload: request
  };
}
