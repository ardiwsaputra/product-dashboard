import { Table } from "@/components/Table";
import { ColumnDefinitionType } from "@/components/Table/table";
import { Product } from "@/types/product";

export default function Home() {
  const data: Product[] = [];

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

  return (
    <main className="px-4">
      <Table columns={columns} data={data} isLoading={false}/>
    </main>
  );
}
