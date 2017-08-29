import { FETCH_TRACKS } from '../actions/fetch_tracks';
import { CLEAR } from '../actions/fetch_artists';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TRACKS:
      return state = action.payload.data;
    case CLEAR:
      return state = [];
  }

  return (state);
}
