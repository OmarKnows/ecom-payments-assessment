// src/components/Input.tsx
import React, { ChangeEvent, FC } from "react";

interface IInputProps {
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const Input: FC<IInputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`p-2 border rounded-md shadow-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-blue-500 w-full ${className}`}
    />
  );
};

export default Input;
