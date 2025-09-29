// components/Button.tsx
import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  const baseStyle = "px-4 py-2 rounded focus:outline-none";
  const variantStyle = variant === 'primary' ? "bg-pastelPink text-white" : "bg-pastelPurple text-white";

  return (
    <button className={`${baseStyle} ${variantStyle}`}>
      {children}
    </button>
  );
};

export default Button;