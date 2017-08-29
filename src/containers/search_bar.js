import React, { Component } from 'react';
import { fetchArtists } from '../actions/fetch_artists';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchArtists(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input onChange={this.onInputChange} value={this.state.term} className="form-control" placeholder="Search..."/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchArtists}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
