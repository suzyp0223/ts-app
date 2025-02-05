import * as React from "react";

import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export interface IProduct {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface IProductTableProps {
  filterText: string;
  inStockOnly: boolean;
  products: Array<IProduct>;
}

export default function ProductTable(props: IProductTableProps) {
  const [rows, setRows] = React.useState([]);
  const { products, filterText, inStockOnly } = props;

  const getCategory = () => {
    let lastCategory: string = null;

    products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) return;

      if (inStockOnly && !product.stocked) return;

      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
  };

  React.useEffect(() => {
    getCategory();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
