"use client";
import { Table } from "@/components/Table";
import { GetCartResult } from "@/types/cart";
import { columns } from "./constant";
import { useFetch } from "@/hooks/useRequest";
import { useSearchParams } from "next/navigation";
import { Pagination } from "@/components";

export default function Page() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "0";
  const limit = 10;
  const skip = (parseInt(page) - 1) * limit;
  const { data: carts, isLoading }= useFetch<GetCartResult>(`carts?limit=${limit}&skip=${skip}`);

  return (
    <main className="px-4 space-y-4">
      <Table columns={columns} data={carts?.carts ?? []} isLoading={isLoading}/>
      <Pagination page={parseInt(page)} total={carts?.total ?? 0} />
    </main>
  );
}
