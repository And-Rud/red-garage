import React, { FC } from "react";
import { MyButtonProps } from "../../types/types";
import "./Mybutton.css";

const Mybutton: FC<MyButtonProps> = ({ children, className }) => {
  return <button className={`mybutton ${className}`}>{children}</button>;
};

export default Mybutton;
