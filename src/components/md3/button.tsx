import { type ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "filled" | "outlined" | "text" | "tonal";

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  filled:
    "bg-md-primary text-md-on-primary hover:shadow-md3-1 active:shadow-none",
  outlined:
    "border border-md-outline text-md-primary hover:bg-md-primary/8 active:bg-md-primary/12",
  text: "text-md-primary hover:bg-md-primary/8 active:bg-md-primary/12",
  tonal:
    "bg-md-secondary-container text-md-on-secondary-container hover:shadow-md3-1 active:shadow-none",
};

export function Button({
  variant = "filled",
  children,
  className = "",
  icon,
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md3-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}
