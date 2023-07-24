import { ColumnDefinitionType } from "@/components/Table/table";
import { Cart } from "@/types/cart";
import Link from "next/link";

const columns: ColumnDefinitionType<Cart, keyof Cart>[] = [
  {
    key: "id",
    header: "ID",
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
  {
    key: "id",
    header: "Action",
    cell: (data: Cart) => <Link className="text-primary" href={`/cart/${data.id}-${data.userId}`}>Detail</Link>,
  },
];

export { columns };