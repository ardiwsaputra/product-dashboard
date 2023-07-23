"use client";
import { Table } from "@/components/Table";
import { GetCartResult } from "@/types/cart";
import { columns } from "./constant";
import { useFetch } from "@/hooks/useRequest";

export default function Home() {
  const { data: carts, error, isLoading }= useFetch<GetCartResult>("carts?limit=10&skip=0");
  if (error) return <div>Failed to load</div>;

  return (
    <main className="px-4">
      <Table columns={columns} data={carts?.carts ?? []} isLoading={isLoading}/>
    </main>
  );
}
