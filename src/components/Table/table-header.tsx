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
        scope="col" className="px-6 py-3 first:rounded-tl-lg last:rounded-tr-lg"
      >
        {column.header}
      </th>
    );
  });

  return (
    <thead className="text-xs text-default uppercase bg-primary border-b-2 border-white">
      <tr className="sm:table-row flex sm:block hidden">{headers}</tr>
    </thead>
  );
};

export default TableHeader;