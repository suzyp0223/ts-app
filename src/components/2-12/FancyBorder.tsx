import React from "react";

export interface ICompositeProps {
  children: React.ReactNode;
  color: string;
}

export default function FancyBorder(props: ICompositeProps) {
  return <div className={"FancyBorder FancyBorder-" + props.color}>{props.children}</div>;
}
