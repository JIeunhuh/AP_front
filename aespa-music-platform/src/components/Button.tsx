// components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

const variantStyles: Record<ButtonProps['variant'], string> = {
  primary:
    'bg-pastelPink text-slate-900 hover:bg-pastelPink/90 focus-visible:ring-pastelPink/80',
  secondary:
    'bg-pastelPurple/40 text-white hover:bg-pastelPurple/60 focus-visible:ring-pastelPurple/60',
};

const Button: React.FC<ButtonProps> = ({ variant, children, className = '', ...rest }) => {
  const baseStyle =
    'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900';

  return (
    <button className={`${baseStyle} ${variantStyles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
