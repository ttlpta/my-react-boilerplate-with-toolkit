import React from "react";
import PropTypes from "prop-types";

import ButtonLinkWrapper from "./ButtonLinkWrapper";

export default function ButtonLink({ label, ...remainProps }) {
  return <ButtonLinkWrapper {...remainProps}>{label}</ButtonLinkWrapper>;
}

ButtonLink.propTypes = {
  label: PropTypes.string.isRequired
};
