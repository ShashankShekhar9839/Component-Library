import React from "react";
import "shashank-monoatomic-css/dist/styles.css";

const Button = (props) => {
  const { label, type, isBlock } = props;

  const commonBtnClasses = `${isBlock ? "" : ""}`;
  const primarBtnClasses = `bg-teal p-4 col-white`;
  return (
    <div className={`${primarBtnClasses} ${commonBtnClasses}`}>{label}</div>
  );
};

export default Button;
