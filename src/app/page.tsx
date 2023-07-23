import { Table } from "@/components/Table";
import { ColumnDefinitionType } from "@/components/Table/table";
import { Product } from "@/types/product";

export default function Home() {
  const data: Product[] = [];

  const columns: ColumnDefinitionType<Product, keyof Product>[] = [
    {
      key: "brand",
      header: "Brand",
    },
  ];

  return (
    <main className="p-4">
      <Table columns={columns} data={data} isLoading={false}/>
    </main>
  );
}
