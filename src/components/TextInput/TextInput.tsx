// src/components/Input.tsx

import React from "react";
import { colors, radius, spacing, shadow } from "../../themes/tokens";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const TextInput: React.FC<InputProps> = ({ label, error, ...props }) => (
  <div className="w-full max-w-md mb-4">
    {label && (
      <label
        className="block mb-1 text-sm font-medium"
        style={{ color: colors.textPrimary }}
      >
        {label}
      </label>
    )}
    <input
      {...props}
      className={`w-full px-4 py-2 border ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition`}
      style={{
        borderRadius: radius.md,
        boxShadow: shadow.sm,
        backgroundColor: colors.surface,
        color: colors.textPrimary,
      }}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);
