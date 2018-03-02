import React from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';

import {
  DefaultColumn,
  ExplanatoryColumn,
  HyperlinkColumn,
  ListColumn,
} from './Columns';
import './Results.css';

const Results = ({
  results,
}) => (
  <AutoSizer>
    {({ height, width }) => (
      <Table
        width={width}
        height={700}
        headerHeight={30}
        rowHeight={50}
        rowCount={results.length}
        rowGetter={({ index }) => results[index]}
        rowClassName={({ index }) => {
          if (index < 0) {
            return 'header-row';
          }
          return index % 2 === 0 ? 'even-row' : 'odd-row';
        }}
        headerClassName="results-header"
      >
        {
          DefaultColumn({
            label: 'GENE',
            dataKey: 'gene',
            width: 100,
          })
        }
        {
          ListColumn({
            label: 'NUCLEOTIDE CHANGE',
            primaryKey: 'nucleotide_change',
            otherKeys: ['other_mappings'],
            width: 150,
          })
        }
        {
          DefaultColumn({
            label: 'PROTEIN CHANGE',
            dataKey: 'protein_change',
            width: 150,
          })
        }
        {
          DefaultColumn({
            label: 'ALIAS',
            dataKey: 'alias',
            width: 100,
          })
        }
        {
          DefaultColumn({
            label: 'REGION',
            dataKey: 'region',
            width: 100,
          })
        }
        {
          ExplanatoryColumn({
            label: 'REPORTED CLASSIFICATION',
            displayKey: 'reported_classification',
            explanatoryKey: 'submitter_comment',
            width: 150,
          })
        }
        {
          DefaultColumn({
            label: 'LAST EVALUATED',
            dataKey: 'last_evaluated',
            width: 150,
          })
        }
        {
          DefaultColumn({
            label: 'LAST UPDATED',
            dataKey: 'last_updated',
            width: 150,
          })
        }
        {
          HyperlinkColumn({
            label: 'MORE INFO',
            displayKey: 'source',
            urlKey: 'url',
            width: 100,
          })
        }
      </Table>
    )}
  </AutoSizer>
);

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

export default Results;
