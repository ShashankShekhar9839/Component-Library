import React, { useState } from "react";
import PropTypes from "prop-types";

const Slider = ({
  min,
  max,
  step,
  value,
  onChange,
  label,
  isBlock,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setCurrentValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const sliderClasses = `slider ${isBlock ? "dis-block" : ""}`;

  return (
    <div className={sliderClasses}>
      {label && <label>{label}</label>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        className="slider-input"
      />
      <div className="slider-value">{currentValue}</div>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  label: PropTypes.string,
  isBlock: PropTypes.bool,
};

Slider.defaultProps = {
  step: 1,
  value: 0,
};

export default Slider;
