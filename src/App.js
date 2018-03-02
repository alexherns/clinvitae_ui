import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import Results from './Results/Results';
import Search from './Search';
import { search } from './requests';
import './App.css';

class App extends React.Component {
  state = {
    results: [],
  }

  onSearch = gene => search(gene).then((data) => {
    this.setState({
      results: data.results,
    });
  });


  render() {
    return (
      <div>
        <Jumbotron className="jumbo">
          <h1>Hernsdorf CLInvitae</h1>
          <Search onSearch={this.onSearch} />
        </Jumbotron>
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
