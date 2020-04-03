import React from "react";
import PropTypes from "prop-types";

import ErrorMsgWrapper from "./ErrorMsgWrapper";

export default function ErrorMsg(props) {
  return <ErrorMsgWrapper>{props.msg}</ErrorMsgWrapper>;
}

ErrorMsg.propTypes = {
  msg: PropTypes.string.isRequired
};
