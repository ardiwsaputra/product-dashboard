import { PRIMARY } from "@/styles/colors";
import React, { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
    height?: number;
    width?: number;
}
const Back: React.FC<Props> = ({
  height = 24,
  width = 24,
  ...rest
}) => (
  <svg width={width} height={height} fill={PRIMARY} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </svg>
);

export default Back;