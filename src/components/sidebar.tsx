import React from "react";
import Typography from "./typography";
import Link from "next/link";
import { ProductIcon } from "@/assets/icons";

interface Props {
  href: string;
  isActive: boolean;
  text: string;
  icon: React.ReactNode;
}

const SidebarItem: React.FC<Props> = ({ href, isActive, text, icon}) => {
  return (
    <Link href={href} className="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group">
      {icon}
      <Typography className="sm:inline-flex hidden" variant="title" color="primary" weight={isActive ? "bold" : "light"}>{text}</Typography>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="w-1/6 space-y-3">
      <SidebarItem href="/" isActive={true} text="Product" icon={<ProductIcon />} />
      <SidebarItem href="/cart" isActive={false} text="Cart" icon={<ProductIcon />} />
    </div>
  );
};

export default Sidebar;
