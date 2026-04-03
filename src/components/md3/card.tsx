import { type ReactNode } from "react";
import Link from "next/link";

type CardVariant = "elevated" | "filled" | "outlined";

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  href?: string;
}

const variantClasses: Record<CardVariant, string> = {
  elevated:
    "bg-md-surface shadow-md3-1 hover:shadow-md3-2 transition-shadow duration-200",
  filled:
    "bg-md-surface-container-highest",
  outlined:
    "bg-md-surface border border-md-outline-variant",
};

export function Card({ variant = "elevated", children, className = "", href }: CardProps) {
  const classes = `rounded-md3-md overflow-hidden ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${classes} block hover:scale-[1.01] transition-transform duration-200`}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

export function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-xl font-medium text-md-on-surface ${className}`}>{children}</h3>;
}

export function CardSubtitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-sm text-md-on-surface-variant mt-1 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}
