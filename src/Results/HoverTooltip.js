import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const HoverTooltip = ({
  tooltipContents,
  children,
}) => (
  <div>
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip">{tooltipContents}</Tooltip>}
    >{children}
    </OverlayTrigger>
  </div>
);

HoverTooltip.propTypes = {
  tooltipContents: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default HoverTooltip;
