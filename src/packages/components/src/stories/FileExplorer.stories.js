import React, { useEffect } from "react";
import { Component, useRef } from "react";
import FileExplorer from "../components/FileExplprer/FileExplorer";
import "shashank-monoatomic-css/dist/styles.css";

export default {
  title: "Example/FileExplorer",
  component: FileExplorer,
};

const Template = (args) => {
  return <FileExplorer {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary FileExplorer",
  isBlock: true,
};
