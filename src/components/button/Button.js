import React from "react";

const Button = ({ children, className = "", type = "" }) => {
  return (
    <div className={`px-5 py-2 font-medium text-xl text-primary rounded-lg ${className} select-none`}>
      {children}
    </div>
  );
};

export default Button;
