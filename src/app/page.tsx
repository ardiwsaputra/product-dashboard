"use client";
import { Table } from "@/components/Table";
import { GetProductResult } from "@/types/product";
import { columns } from "./constant";
import { useFetch } from "@/hooks/useRequest";
import { Input, Pagination, Typography } from "@/components";
import { useSearchParams } from "next/navigation";
import React, { useDeferredValue, useState } from "react";

export default function Product() {
  const [search, setSearch] = useState<string>("");
  const deferredSearch = useDeferredValue(search);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = 10;
  const skip = (parseInt(page) - 1) * limit;
  const { data: products, error, isLoading }= useFetch<GetProductResult>(`products?limit=${limit}&skip=${skip}`);
  if (error) return <div>Failed to load</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="pl-4 space-y-4 pb-8">
      <Typography variant="title" color="primary">Product</Typography>
      <Input label="Search" onChange={handleInputChange} placeholder="perfum oil" />
      <Table 
        columns={columns} 
        data={products?.products.filter((product) => product.title.toLowerCase().includes(deferredSearch.toLowerCase())) ?? []} 
        isLoading={isLoading}
      />
      <Pagination page={parseInt(page)} total={products?.total ?? 0} />
    </main>
  );
}
