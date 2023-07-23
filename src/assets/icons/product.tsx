import { PRIMARY } from "@/styles/colors";
import React, { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
    height?: number;
    width?: number;
}
const Product: React.FC<Props> = ({
  height = 24,
  width = 24,
  ...rest
}) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" fill={PRIMARY} viewBox="0 -960 960 960" {...rest}>
    <path d="M300-286q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 328h244v-60H432v60Zm0-164h244v-60H432v60Zm0-164h244v-60H432v60ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/>
  </svg>
);

export default Product;