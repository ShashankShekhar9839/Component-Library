import React, { useEffect, useState } from "react";
import { Component, useRef } from "react";
import PaginationFrontEnd from "../components/PaginationFrontEnd/PaginationFrontEnd";
import "shashank-monoatomic-css/dist/styles.css";
import useFetch from "../hooks/useFetch";

export default {
  title: "Example/PaginationFrontEnd",
  component: PaginationFrontEnd,
};
let url = "https://dummyjson.com/products?limit=100";
const Template = (args) => {
  const results = useFetch(url);
  if (results.isLoading) return <p>isLoading</p>;
  return <PaginationFrontEnd {...args} data={results} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary PaginationFrontEnd",
  limit: 10,
};
