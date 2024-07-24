import React, { useEffect } from "react";
import { Component, useRef } from "react";
import Button from "../components/Button/Button";
import "shashank-monoatomic-css/dist/styles.css";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => {
  let buttonRef = useRef(null);
  useEffect(() => {
    if (buttonRef.current) {
      console.log(buttonRef.current);
    }
  });
  return <Button {...args} ref={buttonRef} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  isBlock: true,
};
