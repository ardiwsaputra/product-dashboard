"use client";
import { Table } from "@/components/Table";
import { GetProductResult } from "@/types/product";
import { columns } from "./constant";
import { useFetch } from "@/hooks/useRequest";
import { Pagination } from "@/components";
import { useSearchParams } from "next/navigation";

export default function Product() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "0";
  const limit = 10;
  const skip = (parseInt(page) - 1) * limit;
  const { data: products, error, isLoading }= useFetch<GetProductResult>(`products?limit=${limit}&skip=${skip}`);
  if (error) return <div>Failed to load</div>;

  return (
    <main className="pl-4 space-y-4">
      <Table columns={columns} data={products?.products ?? []} isLoading={isLoading}/>
      <Pagination page={parseInt(page)} total={products?.total ?? 0} />
    </main>
  );
}
