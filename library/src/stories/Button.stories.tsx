import React from "react";
import { storiesOf } from "@storybook/react";
// import './button.css';
import Button from "../components/Button";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <Button />;
});

