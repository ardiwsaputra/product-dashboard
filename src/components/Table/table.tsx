import React from "react";
import { TableHeader, TableRows } from ".";

export type ColumnDefinitionType<T, K extends keyof T> = {
    key: K;
    header: string;
    className?: string;
    // eslint-disable-next-line no-unused-vars
    cell?: (data: T) => React.ReactNode | string | undefined;
}

type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  isLoading: boolean;
}
const Table = <T, K extends keyof T>({ data, columns, isLoading }: TableProps<T, K>): React.JSX.Element => {
  return (
    <table className="w-full text-sm text-left">
      <TableHeader columns={columns} />
      <TableRows columns={columns} data={data} isLoading={isLoading} />
    </table>
  );
};

export default Table;