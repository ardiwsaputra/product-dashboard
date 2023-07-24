import React from "react";
import { ColumnDefinitionType } from "./table";
import classNames from "classnames";
import { Typography } from "..";

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  isLoading: boolean;
}

const TableRows = <T, K extends keyof T>({ data, columns, isLoading }: TableRowsProps<T, K>): React.JSX.Element => {
  const columnRender = (row: T, column: ColumnDefinitionType<T, K>) => {
    if (column.cell) return column.cell(row);
    return row[column.key] as React.ReactNode;
  };

  const rows = data.map((row, index) => {
    return (
      <tr key={`row-${index}`} className="bg-white border-b flex flex-col mb-4 sm:table-row">
        {columns.map((column, index2) => {
          return (
            <td key={`cell-${index2}`} className={classNames("px-6 py-4 whitespace-nowrap first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg", column.className)}>
              <Typography color="primary" className="sm:hidden block">{column.header}</Typography>{columnRender(row, column)}
            </td>
          );
        }
        )}
      </tr>
    );
  });

  const spanRows = (text: string) => (
    <tr aria-colspan={columns.length}>
      <td colSpan={columns.length} className="px-6 py-4 whitespace-nowrap">
        {text}
      </td>
    </tr>
  );

  return (
    <tbody>
      {rows.length === 0 && !isLoading ? spanRows("Tidak ada Data") : null}
      {rows.length === 0 && isLoading ? spanRows("Loading ...") : null}
      {rows.length !== 0 && !isLoading ? rows : null}
    </tbody>
  );
};

export default TableRows;