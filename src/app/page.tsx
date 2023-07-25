"use client";
import { Table } from "@/components/Table";
import { GetProductResult } from "@/types/product";
import { brands, columns } from "./constant";
import { useFetch } from "@/hooks/useRequest";
import { Input, Pagination, Select, Typography } from "@/components";
import { useSearchParams } from "next/navigation";
import React, { useDeferredValue, useState } from "react";
import InputRange from "@/components/input-range";

export default function Product() {
  const [search, setSearch] = useState<string>("");
  const deferredSearch = useDeferredValue(search);
  const [filterPriceRange, setFilterPriceRange] = useState({ from: null, to: null });
  const deferredPriceRange = useDeferredValue(filterPriceRange);
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [filterBrand, setFilterBrand] = useState<string>("");
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = 10;
  const skip = (parseInt(page) - 1) * limit;
  const { data: products, error, isLoading }= useFetch<GetProductResult>(`products?limit=${limit}&skip=${skip}`);
  const { data: categories }= useFetch<Array<string>>("/products/categories");
  if (error) return <div>Failed to load</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleInputPriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterPriceRange({
      ...filterPriceRange,
      [e.target.name]: e.target.value
    });
  };

  const arraySearch = products ? products.products.filter((product) => {
    return (
      product.title.toLowerCase().includes(deferredSearch.toLowerCase())
        && (filterBrand !== "" ? product.brand === filterBrand : true)
        && (filterCategory !== "" ? product.category === filterCategory : true)
        && (filterPriceRange.from !== null && filterPriceRange.to !== null && filterPriceRange.from !== "" && filterPriceRange.to !== "" ? product.price >= filterPriceRange.from && product.price <= filterPriceRange.to : true)
    );
  }) : [];

  return (
    <main className="pl-4 space-y-4 pb-8">
      <Typography variant="title" color="primary">Product</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Search" onChange={handleInputChange} placeholder="perfum oil" value={deferredSearch} />
        <Select
          value={filterCategory} 
          label="Category"
          data={categories?.map((category) => ({ value: category, label: category })) ?? []} 
          onChange={(e) => setFilterCategory(e.target.value)}
        />
        <Select
          value={filterBrand} 
          label="Brand"
          data={brands.map((brand) => ({ value: brand, label: brand }))} 
          onChange={(e) => setFilterBrand(e.target.value)}
        />
        <InputRange 
          namefrom="from"
          nameto="to"
          label="Price Range" 
          type="number" 
          min={0} 
          valuefrom={deferredPriceRange.from}
          valueto={deferredPriceRange.to}
          onChange={handleInputPriceRangeChange}
        />
      </div>
      <Table 
        columns={columns} 
        data={arraySearch} 
        isLoading={isLoading}
      />
      <Pagination page={parseInt(page)} total={products?.total ?? 0} />
    </main>
  );
}
