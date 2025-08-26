import { Children } from "react";

function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button className={`btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
export default Button;
