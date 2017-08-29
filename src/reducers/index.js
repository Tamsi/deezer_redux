import { combineReducers } from 'redux';
import ArtistsReducer from './reducer_artists';
import AlbumsReducer from './reducer_albums';
import TracksReducer from './reducer_tracks';

const rootReducer = combineReducers({
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  tracks: TracksReducer
});

export default rootReducer;
