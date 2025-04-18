// src/components/Toast.tsx

import React from "react";
import { colors, radius, shadow } from "../../themes/tokens";

type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type?: ToastType;
}

const backgroundMap: Record<ToastType, string> = {
  success: colors.success,
  error: colors.danger,
  info: colors.primary,
};

export const Toast: React.FC<ToastProps> = ({ message, type = "info" }) => (
  <div
    className="px-4 py-3 text-white animate-fade-in"
    style={{
      backgroundColor: backgroundMap[type],
      borderRadius: radius.md,
      boxShadow: shadow.md,
    }}
  >
    {message}
  </div>
);
