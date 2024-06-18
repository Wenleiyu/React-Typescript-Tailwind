import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  textOnly: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  textOnly,
  className = "",
  ...props
}) => {
  let cssClasses = textOnly ? "text-button" : "button";

  cssClasses += className ? ` ${className}` : "";

  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  );
};

export default Button;
