import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAlbums } from '../actions/fetch_albums';

class ArtistsList extends Component {
  constructor(props) {
    super(props);

    this.display = false;

    this.renderList = this.renderList.bind(this);
    this.onSelectArtist = this.onSelectArtist.bind(this);
  }

  onSelectArtist(artist) {
    this.props.fetchAlbums(artist)
  }

  renderList(listData) {
    const listArtists = listData.map((artist) => {
      return (
        <tr onClick={() => this.onSelectArtist(artist)} key={artist.id}>
          <td><img src={artist.picture_small}/></td>
          <td>{artist.name}</td>
        </tr>
      );
    });

    return (listArtists);
  }

  componentWillUpdate(data) {
    if (data.artists.length > 0 && data.albums.length <= 0)
      this.display = true;
    else
      this.display = false;
  }

  render() {
    if (this.display)
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Artists</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList(this.props.artists)}
          </tbody>
        </table>
      );
    else
      return null;
  }
}

function mapStateToProps({artists, albums}) {
  return { artists, albums };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAlbums}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsList);
