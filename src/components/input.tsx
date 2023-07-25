import React from "react";
import { Typography } from ".";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <div className="space-y-2">
      {label ? (
        <Typography color="primary" variant="subtitle">{label}</Typography>
      ) : null}
      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 outline-none" {...rest}/>
    </div>
  );
};

export default Input;