
import React from 'react';
import { Component } from "react";
import Button from "../components/Button/Button";
import 'shashank-monoatomic-css/dist/styles.css';

export default {
    title: 'Example/Button',
    component : Button,
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};