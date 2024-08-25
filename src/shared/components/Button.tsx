import React from "react";

type ButtonVariant = "red" | "blue" | "orange" | "yellow" | "green";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  red: "bg-red-500 hover:bg-red-600 active:bg-red-700",
  blue: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
  orange: "bg-orange-500 hover:bg-orange-600 active:bg-orange-700",
  yellow: "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700",
  green: "bg-green-500 hover:bg-green-600 active:bg-green-700",
};

const Button: React.FC<ButtonProps> = ({
  variant = "blue",
  className,
  ...props
}) => {
  const variantClass = variantClasses[variant];
  return (
    <button
      className={`px-4 py-2 rounded focus:outline-none text-white duration-300 ${variantClass} ${className}`}
      {...props}
    />
  );
};

export default Button;
