import React, { ReactNode } from "react";
import "../styles/Join.css";

interface ButtonProps {
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <a href="#" className="glow-on-hover">
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
};

