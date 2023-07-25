import React from "react";
import { Input, Typography } from ".";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    namefrom: string;
    nameto: string;
    valuefrom?: string | number | null;
    valueto?: string | number | null;
}

const InputRange: React.FC<Props> = ({ label, namefrom, nameto, ...rest }) => {
  return (
    <div className="space-y-2">
      {label ? (
        <Typography color="primary" variant="subtitle">{label}</Typography>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input {...rest} placeholder="From" name={namefrom} type={rest.type} defaultValue={rest.valuefrom ?? ""} />
        <Input {...rest} placeholder="To" name={nameto} type={rest.type} defaultValue={rest.valueto ?? ""}/>
      </div>
    </div>
  );
};

export default InputRange;