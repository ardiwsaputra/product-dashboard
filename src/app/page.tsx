"use client";
import { Table } from "@/components/Table";
import { GetProductResult } from "@/types/product";
import { columns } from "./constant";
import { useFetch } from "@/hooks/useRequest";

export default function Home() {
  const { data: products, error, isLoading }= useFetch<GetProductResult>("products?limit=10&skip=0");
  if (error) return <div>Failed to load</div>;

  return (
    <main className="px-4">
      <Table columns={columns} data={products?.products ?? []} isLoading={isLoading}/>
    </main>
  );
}
