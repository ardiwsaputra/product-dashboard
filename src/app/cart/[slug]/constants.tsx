import { ColumnDefinitionType } from "@/components/Table/table";
import { Product } from "@/types/cart";

const columns: ColumnDefinitionType<Product, keyof Product>[] = [
  {
    key: "title",
    header: "Title",
  },
  {
    key: "price",
    header: "Price",
  },
  {
    key: "quantity",
    header: "Quantity",
  },
  {
    key: "total",
    header: "Total",
  },
];

export { columns };