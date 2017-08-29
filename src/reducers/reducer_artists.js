import { FETCH_ARTISTS } from '../actions/fetch_artists';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ARTISTS:
      return state = action.payload.data;
  }

  return (state);
}
