import React from "react";

type Props = {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  children?: React.ReactNode;
};

const SectionContainer = ({ title, subtitle, children }: Props) => {
  return (
    <div className="space-y-6 md:space-y-10">
      <div>
        <div className="!font-helvetica-display font-bold md:font-normal text-4xl md:text-6xl text-blue-gray-800 text-start">{title}</div>
        <div className="text-blue-gray-500 font-medium text-lg md:text-2xl pt-3 text-start">{subtitle}</div>
      </div>
      {children}
    </div>
  );
};

export default SectionContainer;
