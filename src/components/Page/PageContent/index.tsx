import React from 'react';

export const PCLayoutPageContent = ({
  children,
}: {
  children?: React.ReactNode;
}) => {

  return <div className="w-full h-full">{children}</div>;
};
