import React from 'react';
import { twMerge } from 'tailwind-merge';

export const PCLayoutTD = ({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
} & React.TdHTMLAttributes<HTMLTableCellElement>
) => {
  return (
    <td
      className={twMerge('p-4 border-b border-blue-gray-50', className)}
      {...props}
    >
      {children}
    </td>
  );
};
