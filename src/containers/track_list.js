import React, { Component } from 'react';
import { connect } from 'react-redux';

class TracksList extends Component {
  constructor(props) {
    super(props);
    
    this.display = false;
  }

  renderList(listData) {
    return (
      <tr key={listData.id}>
        <td>{listData.title}</td>
      </tr>
    );
  }

  componentWillUpdate(data) {
    if (data.tracks.length > 0)
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
              <th>Tracks</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tracks.map(this.renderList)}
          </tbody>
        </table>
      );
    else
      return null;
  }
}

function mapStateToProps({tracks}) {
  return { tracks };
}

export default connect(mapStateToProps)(TracksList);
