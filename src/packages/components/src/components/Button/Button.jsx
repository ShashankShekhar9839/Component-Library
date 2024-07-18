import React from "react";
import "shashank-monoatomic-css/dist/styles.css";

const Button = (props) => {
  const { label, type, isBlock } = props;

  const commonBtnClasses = `${isBlock ? "dis-block" : "dis-inline-block"}`;
  const primaryBtnClasses = `bg-teal h-4 col-white`;
  return (
    <div className={`${primaryBtnClasses} ${commonBtnClasses}`}>{label}</div>
  );
};

export default Button;
