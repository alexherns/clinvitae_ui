import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import SearchBar from './SearchBar';
import './Search.css';

class Search extends React.Component {
  state = {
    searchText: '',
  }

  render() {
    return (
      <div className="search">
        <SearchBar
          onChange={searchText => this.setState({ searchText })}
        />
        <Button
          className="search-button"
          bsStyle="primary"
          disabled={!this.state.searchText}
          onClick={() => this.props.onSearch(this.state.searchText)}
        >Search
        </Button>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
