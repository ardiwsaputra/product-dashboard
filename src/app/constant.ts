import { ColumnDefinitionType } from "@/components/Table/table";
import { Product } from "@/types/product";

const columns: ColumnDefinitionType<Product, keyof Product>[] = [
  {
    key: "title",
    header: "Name",
  },
  {
    key: "brand",
    header: "Brand",
  },
  {
    key: "price",
    header: "Price",
  },
  {
    key: "stock",
    header: "Stock",
  },
  {
    key: "category",
    header: "Category",
  },
];

const brands = [
  "Apple",
  "Samsung",
  "Huawei",
  "OPPO",
  "Infinix",
  "Microsoft Surface",
  "HP Pavilion",
];

export { columns, brands };