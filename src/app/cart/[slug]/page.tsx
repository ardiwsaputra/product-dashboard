"use client";
import Back from "@/assets/icons/back";
import { Table, Typography } from "@/components";
import { useFetch } from "@/hooks/useRequest";
import { Cart } from "@/types/cart";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import React from "react";
import { columns } from "./constants";

const Page = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const slug = params.slug.split("-");
  const { data: cart }= useFetch<Cart>(`cart/${slug[0]}`);
  const { data: user }= useFetch<User>(`user/${slug[1]}`);

  return (
    <div className="flex flex-col space-y-4 bg-white w-full p-4 rounded-lg">
      <Back className="cursor-pointer rounded-lg" onClick={() => router.push("/cart")} />
      <Typography variant="title" color="primary">Cart Detail</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Typography variant="subtitle">User: {user?.firstName} {user?.lastName}</Typography>
        <Typography variant="subtitle"># of Items: {cart?.totalProducts}</Typography>
        <Typography variant="subtitle">Total Amount: {cart?.total}</Typography>
      </div>
      <div className="w-full">
        <Table columns={columns} data={cart?.products ?? []} isLoading={false} />
      </div>
    </div>
  );
};

export default Page;