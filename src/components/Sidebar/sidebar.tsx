"use client";
import React from "react";
import Typography from "../typography";
import { CartIcon, ProductIcon } from "@/assets/icons";
import { usePathname } from "next/navigation";
import { SidebarItem } from ".";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-1/6 space-y-3 shadow p-1 sm:p-4 h-full bg-white rounded-lg">
      <Typography variant="title" className="sm:block hidden">Navbar</Typography>
      <SidebarItem href="/" isActive={pathname === "/"} text="Product" icon={<ProductIcon />} />
      <SidebarItem href="/cart" isActive={pathname === "/cart"} text="Cart" icon={<CartIcon />} />
    </div>
  );
};

export default Sidebar;
