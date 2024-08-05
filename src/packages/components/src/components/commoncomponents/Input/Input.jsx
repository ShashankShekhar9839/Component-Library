import React from "react";
import PropTypes from "prop-types";

let propTypes = {
  label: PropTypes.string,
  isBlock: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onchange: PropTypes.func,
  type: PropTypes.oneOf(["number", "string"]),
  placeholder: PropTypes.string,
  maxValue: PropTypes.number,
};

const Input = (props) => {
  const { label, isBlock, onFocus, onBlur, onchange, type, maxValue } = props;

  const inputCommonClasses = `p-4 br-md ${isBlock ? 'dis-block' : ''}`
  return (
    <div>
      <label className={isBlock ? "dis-block mb-2" : "mr-4"}>{label}</label>
      <input
        className={`${inputCommonClasses}`}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onchange}
        type={type}
        max={type === "number" ? maxValue : undefined}
      />
    </div>
  );
};

Input.propTypes = propTypes;

export default Input;
