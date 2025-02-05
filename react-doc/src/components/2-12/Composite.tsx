import * as React from "react";

import FancyBorder from "./FancyBorder";

export default function Composite() {
  return (
    <div>
      <FancyBorder color="red">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </FancyBorder>
    </div>
  );
}
