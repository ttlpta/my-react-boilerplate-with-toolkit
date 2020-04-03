import React from "react";
import PropTypes from "prop-types";

import InputTxtWrapper from "./InputTxtWrapper";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

const InputTxt = React.forwardRef((props, ref) => {
  return (
    <InputTxtWrapper>
      <label htmlFor={props.name}>{props.label}</label>
      {props.multiline && (
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          ref={ref}
          rows={3}
        ></textarea>
      )}
      {!props.multiline && (
        <input
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          ref={ref}
        />
      )}
      {props.errorMsg && <ErrorMsg msg={props.errorMsg} />}
    </InputTxtWrapper>
  );
});

export default InputTxt;

InputTxt.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errorMsg: PropTypes.string
};
