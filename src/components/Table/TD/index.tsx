import React from 'react';

export const PCLayoutTD = ({ children }: { children?: React.ReactNode }) => {
  return <td className="p-4 border-b border-blue-gray-50">{children}</td>;
};
