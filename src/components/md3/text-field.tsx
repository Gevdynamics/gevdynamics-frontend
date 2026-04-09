"use client";

import { type InputHTMLAttributes, type TextareaHTMLAttributes, forwardRef } from "react";

type TextFieldVariant = "outlined" | "filled";

interface BaseTextFieldProps {
  label: string;
  variant?: TextFieldVariant;
  error?: string;
  supportingText?: string;
  className?: string;
}

type InputTextFieldProps = BaseTextFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
    multiline?: false;
  };

type TextareaTextFieldProps = BaseTextFieldProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> & {
    multiline: true;
    rows?: number;
  };

type TextFieldProps = InputTextFieldProps | TextareaTextFieldProps;

const variantClasses: Record<TextFieldVariant, string> = {
  outlined:
    "border border-md-outline bg-transparent focus-within:border-md-primary focus-within:border-2",
  filled:
    "border-b-2 border-md-on-surface-variant bg-md-surface-container-highest focus-within:border-md-primary",
};

export const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(function TextField(props, ref) {
  const {
    label,
    variant = "outlined",
    error,
    supportingText,
    className = "",
    multiline,
    ...inputProps
  } = props;

  const wrapperClasses = `relative rounded-md3-xs ${variantClasses[variant]} ${
    error ? "border-md-error focus-within:border-md-error" : ""
  } ${className}`;

  const inputClasses =
    "w-full bg-transparent px-4 pt-5 pb-2 text-md-on-surface outline-none text-base peer placeholder-transparent";

  const labelClasses = `absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-all duration-200
    peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-md-primary
    peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs
    ${error ? "text-md-error peer-focus:text-md-error" : "text-md-on-surface-variant"}`;

  const multilineLabelClasses = `absolute left-4 top-4 text-sm transition-all duration-200
    peer-focus:top-1 peer-focus:text-xs peer-focus:text-md-primary
    peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs
    ${error ? "text-md-error peer-focus:text-md-error" : "text-md-on-surface-variant"}`;

  return (
    <div className="w-full">
      <div className={wrapperClasses}>
        {multiline ? (
          <>
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={`${inputClasses} pt-6 resize-none`}
              placeholder={label}
              rows={(props as TextareaTextFieldProps).rows ?? 4}
              {...(inputProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
            <label className={multilineLabelClasses}>{label}</label>
          </>
        ) : (
          <>
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={inputClasses}
              placeholder={label}
              {...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
            />
            <label className={labelClasses}>{label}</label>
          </>
        )}
      </div>
      {(error || supportingText) && (
        <p
          className={`mt-1 px-4 text-xs ${
            error ? "text-md-error" : "text-md-on-surface-variant"
          }`}
        >
          {error || supportingText}
        </p>
      )}
    </div>
  );
});
