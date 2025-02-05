import * as React from "react";

import { IProduct } from "./ProductTable";

export interface IProductRowProps {
  product: IProduct;
  key: string;
}

export function ProductRow(props: IProductRowProps) {
  const name = props.product.stocked ? props.product.name : <span style={{ color: "red" }}>{props.product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}
