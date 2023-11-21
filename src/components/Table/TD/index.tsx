import React from 'react';
import { twMerge } from 'tailwind-merge';

export const PCLayoutTD = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <td className={twMerge(
    "p-4 border-b border-blue-gray-50",
    className
  )}>{children}</td>;
};
