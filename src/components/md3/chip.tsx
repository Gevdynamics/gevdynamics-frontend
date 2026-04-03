import { type ReactNode } from "react";

type ChipVariant = "assist" | "filter" | "input" | "suggestion";

interface ChipProps {
  variant?: ChipVariant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  selected?: boolean;
}

const variantClasses: Record<ChipVariant, { base: string; selected: string }> = {
  assist: {
    base: "border border-md-outline text-md-on-surface",
    selected: "bg-md-secondary-container text-md-on-secondary-container border-transparent",
  },
  filter: {
    base: "border border-md-outline text-md-on-surface-variant",
    selected: "bg-md-secondary-container text-md-on-secondary-container border-transparent",
  },
  input: {
    base: "border border-md-outline text-md-on-surface-variant",
    selected: "bg-md-secondary-container text-md-on-secondary-container border-transparent",
  },
  suggestion: {
    base: "border border-md-outline-variant text-md-on-surface-variant",
    selected: "bg-md-secondary-container text-md-on-secondary-container border-transparent",
  },
};

export function Chip({ variant = "assist", children, className = "", icon, selected = false }: ChipProps) {
  const styles = variantClasses[variant];
  const classes = `inline-flex items-center gap-2 rounded-md3-sm px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
    selected ? styles.selected : styles.base
  } ${className}`;

  return (
    <span className={classes}>
      {icon}
      {children}
    </span>
  );
}
