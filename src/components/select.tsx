import React from "react";
import { Typography } from ".";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
    label: string;
    data: { value: string; label: string }[];
}

const Select: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <div className="space-y-2">
      {label ? (
        <Typography color="primary" variant="subtitle">{label}</Typography>
      ) : null}
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3 outline-none" {...rest}>
        <option value={""}>Choose {label}</option>
        {rest.data.map((item) => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;