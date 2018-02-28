import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const Results = ({
  results,
}) => (
  <Table bordered hover>
    <thead>
      <tr>
        <th>name</th>
      </tr>
    </thead>
    <tbody>
      {results.map(result => <tr key={result}><td>{result.name}</td></tr>)}
    </tbody>
  </Table>
);

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Results;
