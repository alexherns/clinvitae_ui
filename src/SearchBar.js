import React from 'react';
import PropTypes from 'prop-types';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { autocomplete } from './requests';

class SearchBar extends React.Component {
  state = {
    isLoading: false,
    options: [],
  }

  handleAutocompleteSearch = (prefix) => {
    this.setState({
      isLoading: true,
    });
    autocomplete(prefix).then((data) => {
      this.setState({
        isLoading: false,
        options: data.results,
      });
    }).catch(() => {
      // ignore errors for now but still update loading state
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <div>
        <AsyncTypeahead
          selectHintOnEnter
          allowNew
          useCache={false}
          minLength={1}
          labelKey="name"
          newSelectionPrefix="Query unknown gene: "
          placeholder="Enter gene name..."
          onInputChange={this.props.onChange}
          isLoading={this.state.isLoading}
          options={this.state.options}
          onSearch={this.handleAutocompleteSearch}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
