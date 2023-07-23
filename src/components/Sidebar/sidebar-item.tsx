import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { Typography } from "..";

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

export default SidebarItem;
