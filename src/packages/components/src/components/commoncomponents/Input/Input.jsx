import React from "react";
import PropTypes from "prop-types";

let propTypes = {
  label: PropTypes.string,
  isBlock: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onchange: PropTypes.func,
  type: PropTypes.oneOf[("number", "string")],
};

const Input = (props) => {
  const { label, isBlock } = props;
  return (
    <>
      <label className={`{${isBlock ? "dis-block" : ""}}`}>{label}</label>
      <input />
    </>
  );
};
Input.propTypes = propTypes;
export default Input;
