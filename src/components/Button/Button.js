import React from "react";
import PropTypes from "prop-types";

import ButtonWrapper from "./ButtonWrapper";

export default function Button(props) {
  return (
    <ButtonWrapper
      value={props.label}
      aria-label={props.label}
      type={props.type}
      onClick={props.onClick}
    />
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: "button"
};
