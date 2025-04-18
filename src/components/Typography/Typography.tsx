// src/components/Typography.tsx

import React from "react";
import { colors } from "../../themes/tokens";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "caption" | "p" ;
}

export const Typography: React.FC<TypographyProps> = ({ children, variant = "body" }) => {
  const baseStyle = "text-gray-900";
  const styles: Record<NonNullable<TypographyProps["variant"]>, string> = {
    h1: "text-4xl font-bold mb-4",
    h2: "text-3xl font-semibold mb-3",
    h3: "text-2xl font-medium mb-2",
    body: "text-base",
    caption: "text-sm text-gray-500",
    p: "text-base",
  };
  

  return <div className={`${baseStyle} ${styles[variant]}`}>{children}</div>;
};
