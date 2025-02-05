import React from "react";

export interface ISearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onInStockChange: (inStockOnly: boolean) => void;
}

export default function SearchBar(props: ISearchBarProps) {
  const handleFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onFilterTextChange(event.target.value);
  };
  const handleInStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onInStockChange(Boolean(event.target.value));
  };

  return (
    <form>
      <input type="text" placeholder="Search..." value={props.filterText} onChange={handleFilterTextChange} />
      <p>
        <input type="checkbox" checked={props.inStockOnly} onChange={handleInStockChange} />
        Only show products in stock
      </p>
    </form>
  );
}
