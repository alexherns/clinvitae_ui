import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import { Column } from 'react-virtualized';

import HoverTooltip from './HoverTooltip';
import { flattenStrings } from '../utils';

const DefaultColumn = props => (
  <Column
    {...props}
  />
);

const ExplanatoryColumn = ({
  displayKey,
  explanatoryKey,
  ...other
}) => DefaultColumn({
  dataKey: displayKey,
  // eslint-disable-next-line react/prop-types
  cellRenderer: ({ rowData }) => (!rowData[explanatoryKey]
    ? <span>{rowData[displayKey]}</span>
    :
    <HoverTooltip tooltipContents={rowData[explanatoryKey]}>
      <span>
        <Badge>!</Badge>&nbsp;
        {rowData[displayKey]}
      </span>
    </HoverTooltip>
  ),
  ...other,
});

ExplanatoryColumn.propTypes = {
  displayKey: PropTypes.string.isRequired,
  explanatoryKey: PropTypes.string.isRequired,
};

const ListColumn = ({
  primaryKey,
  otherKeys,
  ...other
}) => DefaultColumn({
  dataKey: primaryKey,
  // eslint-disable-next-line react/prop-types
  cellRenderer: ({ rowData }) => (
    <HoverTooltip tooltipContents={(
      <ul>
        {flattenStrings(otherKeys.map(key => rowData[key].split(',')))
          .map((text, idx) => <li key={idx}>{text}</li>)}
      </ul>
    )}
    >
      <span>{rowData[primaryKey]}</span>
    </HoverTooltip>
  ),
  ...other,
});

ListColumn.propTypes = {
  primaryKey: PropTypes.string.isRequired,
  otherKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const HyperlinkColumn = ({
  displayKey,
  urlKey,
  ...other
}) => DefaultColumn({
  dataKey: displayKey,
  // eslint-disable-next-line react/prop-types
  cellRenderer: ({ rowData }) => <a href={rowData[urlKey]}>{rowData[displayKey]}</a>,
  ...other,
});

HyperlinkColumn.propTypes = {
  displayKey: PropTypes.string.isRequired,
  urlKey: PropTypes.string.isRequired,
};

export {
  DefaultColumn,
  ExplanatoryColumn,
  HyperlinkColumn,
  ListColumn,
};
