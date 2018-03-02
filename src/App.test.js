import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import * as requests from './requests';

describe('App', () => {
  let sandbox;
  beforeEach(() => { sandbox = sinon.sandbox.create(); });
  afterEach(() => sandbox.restore());

  it('renders without crashing', () => {
    shallow(<App />);
  });

  describe('with mocked search', () => {
    let sampleResults;
    beforeEach(() => {
      sampleResults = {
        results: ['1', '2', '3'],
      };
      sandbox.stub(requests, 'search').resolves(sampleResults);
    });

    it('should store results in state on search', () => {
      const app = shallow(<App />);
      expect(app.state('results')).toEqual([]);
      app.instance().onSearch().then(() => {
        app.update();
        expect(app.state('results')).toEqual(sampleResults.results);
      });
    });
  });
});
