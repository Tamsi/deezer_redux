import axios from 'axios';
import { token } from './index';

export const FETCH_TRACKS = 'FETCH_TRACKS';

export function fetchTracks(album) {
  const url = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/album/${album.id}/tracks`;
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
    type: FETCH_TRACKS,
    payload: request
  };
}
