import React from "react";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row px-4 w-full">
      {children}
    </div>
  );
};

export default Layout;