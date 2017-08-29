import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTracks } from '../actions/fetch_tracks';

class AlbumsList extends Component {
  constructor(props) {
    super(props);

    this.display = false;

    this.renderList = this.renderList.bind(this);
    this.onSelectAlbum = this.onSelectAlbum.bind(this);
  }

  onSelectAlbum(album) {
    this.props.fetchTracks(album);
  }

  renderList(listData) {
    const listAlbums = listData.map((album) => {
      return (
        <tr onClick={() => this.onSelectAlbum(album)} key={album.id}>
          <td><img src={album.cover_small}/></td>
          <td>{album.title}</td>
        </tr>
      );
    });

    return (listAlbums);
  }

  componentWillUpdate(data) {
    if (data.albums.length > 0 && data.tracks.length <= 0)
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
              <th>Albums</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList(this.props.albums)}
          </tbody>
        </table>
      );
    else
      return null;
  }
}

function mapStateToProps({albums, tracks}) {
  return { albums, tracks };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTracks}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);
