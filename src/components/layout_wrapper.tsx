import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  childrenClassName?: string;
};

const LayoutWrapper = ({ children, className, childrenClassName }: Props) => {
  return (
    <div className={`w-[100vw] flex items-start justify-center app-px ${className}`}>
      <div className={`max-w-[1264px] w-full ${childrenClassName}`}>{children}</div>
    </div>
  );
};

export default LayoutWrapper;
