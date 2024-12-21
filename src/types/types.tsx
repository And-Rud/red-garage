import React from "react";

export interface MyButtonProps {
  children: string;
  className: string;
}

export interface IRoute {
  path: string;
  element: React.FC;
}
