import React from "react";
import Typography from "./typography";
import Link from "next/link";
import { CartIcon, ProductIcon } from "@/assets/icons";
import classNames from "classnames";

interface Props {
  href: string;
  isActive: boolean;
  text: string;
  icon: React.ReactNode;
}

const SidebarItem: React.FC<Props> = ({ href, isActive, text, icon}) => {
  return (
    <Link href={href} className={classNames("flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group p-2 active:rounded-lg space-x-2", isActive && "bg-gray-100")}>
      {icon}
      <Typography className="md:inline-flex hidden" variant="subtitle" color="primary">{text}</Typography>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="w-1/6 space-y-3 shadow p-1 sm:p-4">
      <Typography variant="title" className="sm:block hidden">Navbar</Typography>
      <SidebarItem href="/" isActive={true} text="Product" icon={<ProductIcon />} />
      <SidebarItem href="/cart" isActive={false} text="Cart" icon={<CartIcon />} />
    </div>
  );
};

export default Sidebar;
