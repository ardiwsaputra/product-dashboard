import { ColumnDefinitionType } from "@/components/Table/table";
import { Cart } from "@/types/cart";

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
    key: "discountedTotal",
    header: "Discount",
  },
  {
    key: "total",
    header: "Total",
  },
];

export { columns };