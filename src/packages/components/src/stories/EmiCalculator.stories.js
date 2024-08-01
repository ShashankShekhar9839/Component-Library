import React, { useEffect } from "react";
import { useRef } from "react";
import EmiCalculator from "../components/EmiCalci/EmiCalculator";
import "shashank-monoatomic-css/dist/styles.css";

export default {
  title: "Example/EmiCalculator",
  component: EmiCalculator,
};

const Template = (args) => {
  return <EmiCalculator {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  isBlock: true,
};
