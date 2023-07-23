import React from "react";
import { ColumnDefinitionType } from "./table";

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
}

const TableHeader = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>): React.JSX.Element => {
  const headers = columns.map((column, index) => {
    return (
      <th
        key={`headCell-${index}`}
        scope="col" className="px-6 py-3"
      >
        {column.header}
      </th>
    );
  });

  return (
    <thead className="text-xs text-default uppercase bg-primary border-b-2 border-white">
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;