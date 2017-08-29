import React, { Component } from 'react';
import { url, token } from '../actions/index';
import SearchBar from '../containers/search_bar';
import ArtistsList from '../containers/artist_list';
import AlbumsList from '../containers/album_list';
import TracksList from '../containers/track_list';
import { rootReducer } from '../reducers/index';

export default class App extends Component {
  render() {
    return (
      <div>
        {(token === '') ? 
          <a href={url}><button>Login</button></a>
        :
          (<div>
            <a href={url}><button>Login</button></a>
            <SearchBar />
            <ArtistsList />
            <AlbumsList />
            <TracksList />
          </div>)
        }
      </div>
    );
}
}
