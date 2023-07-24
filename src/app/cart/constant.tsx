import { ColumnDefinitionType } from "@/components/Table/table";
import { Cart } from "@/types/cart";
import Link from "next/link";

const columns: ColumnDefinitionType<Cart, keyof Cart>[] = [
  {
    key: "id",
    header: "ID",
    cell: (data: Cart) => <Link className="text-primary font-bold" href={`/cart/${data.id}-${data.userId}`}>{data.id}</Link>,
  },
  {
    key: "totalProducts",
    header: "Total Products",
  },
  {
    key: "totalQuantity",
    header: "Total Quantity",
  },
  {
    key: "total",
    header: "Total",
  },
];

export { columns };