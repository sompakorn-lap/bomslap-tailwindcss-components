import { ComponentProps } from "react";

function Button({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      className="px-4 py-1 text-white bg-blue-600 border-2 border-blue-600 rounded-lg"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
