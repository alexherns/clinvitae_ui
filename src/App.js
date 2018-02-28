import React from 'react';

import Results from './Results';
import Search from './Search';
import { search } from './requests';

class App extends React.Component {
  state = {
    results: [],
  }

  onSearch = (gene) => {
    search(gene).then((data) => {
      this.setState({
        results: data.results,
      });
    });
  }

  render() {
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
