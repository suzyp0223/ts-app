import * as React from "react";

export interface IProductCategoryRowProps {
  category: string;
  key: string;
}

export function ProductCategoryRow(props: IProductCategoryRowProps) {
  return (
    <tr>
      <th>{props.category}</th>
    </tr>
  );
}
