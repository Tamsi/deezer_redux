import { FETCH_ALBUMS } from '../actions/fetch_albums';
import { CLEAR } from '../actions/fetch_artists';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALBUMS:
      return state = action.payload.data;
    case CLEAR:
      return state = [];
  }

  return (state);
}
