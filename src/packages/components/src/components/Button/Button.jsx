import React from "react";
import "shashank-monoatomic-css/dist/styles.css";
import PropTypes from "prop-types";

const propTypes = {
  label: PropTypes.node,
  type: PropTypes.oneOf(["Primary", "Secondary", "Tertiary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isBlock: PropTypes.bool,
  onclick: PropTypes.func,
};

const Button = (props) => {
  const { label, isBlock, type = "Tertiary", size = 'lg' } = props;

  const commonBtnClasses = `${isBlock ? "dis-block" : "dis-inline-block"} flex flex-align-items-center justify-content-center`;

  const getBtnClasses = (type) => {
    switch (type) {
      case "Primary":
        return `bg-teal  p-2 text-white`;
      case "Secondary":
        return `bg-red  p-2 text-white`;
      case "Tertiary":
        return `bg-black  p-2 text-white`;
    }
  };

  const getBtnSizeClasses = (size) => {
    switch(size) {
      case 'sm': 
      return `h-5`;
      case 'md' : 
      return `h-6`;
      case 'lg': 
      return `h-7`;
    }
  }

  const handleClick = () => {
    const { onClick } = props;
    if (onClick) {
      onClick();
    }
  };
  return (
    <div
      className={`${getBtnClasses(type)} ${getBtnSizeClasses(size)} ${commonBtnClasses}`}
      style={{ textAlign: "center" }}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

Button.propTypes = propTypes;
export default Button;
