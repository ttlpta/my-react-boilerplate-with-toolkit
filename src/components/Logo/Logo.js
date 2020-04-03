import React from "react";
import PropTypes from "prop-types";

import LogoWrapper from "./LogoWrapper";

export default function Logo(props) {
  return <LogoWrapper {...props}>Car Tracking</LogoWrapper>;
}

Logo.propTypes = {
  small: PropTypes.bool
};

Logo.defaultProps = {
  small: false
};
