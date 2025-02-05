import * as React from "react";

import FancyBorder from "./FancyBorder";

export interface ISpecializeProps {
  title: string;
  message: string;
}

function Dialog(props: ISpecializeProps) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  );
}

export default function Specialize() {
  return <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />;
}
