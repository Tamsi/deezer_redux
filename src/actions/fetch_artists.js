import axios from 'axios';
import { token } from './index';

const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist?`;

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const CLEAR = 'CLEAR';

export function fetchArtists(term) {
  const url = `${ROOT_URL}q=${term}`;
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

  return [
    {
      type: FETCH_ARTISTS,
      payload: request
    },
    {
      type: CLEAR,
      payload: null
    }
  ];
}
