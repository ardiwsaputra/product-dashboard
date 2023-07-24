import React from "react";
import { ColumnDefinitionType } from "./table";
import classNames from "classnames";

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
      <tr key={`row-${index}`} className="bg-white border-b">
        {columns.map((column, index2) => {
          return (
            <td key={`cell-${index2}`} className={classNames("px-6 py-4 whitespace-nowrap", column.className)}>
              {columnRender(row, column)}
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