import React from "react";

const Lable = ({ children,className="" }) => {
  return (
    <div className={`font-bold text-4xl text-text1 dark:text-white my-3 ${className}`}>
      {children}
    </div>
  );
};

export default Lable;
