import React from "react";
import cx from "classnames";

interface Props {
    children: React.ReactNode;
    color?: "primary" | "secondary";
    variant?: "title" | "subtitle" | "body";
    weight?: "bold" | "light"; 
    className?: string;
}

const Typography: React.FC<Props> = ({ children, variant, color, weight, className } ) => {
  return (
    <p className={
      cx(
        {
          "text-primary": color === "primary",
          "text-secondary": color === "secondary",
          "text-[20px]": variant === "title",
          "text-[16px]": variant === "subtitle",
          "text-[12px]": variant === "body",
        },
        `font-${weight}`,
        className
      )}>
      {children}
    </p>
  );
};

export default Typography;