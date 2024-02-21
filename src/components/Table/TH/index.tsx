import React, { ThHTMLAttributes } from 'react';

interface THProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export const PCLayoutTH = ({ children, ...rest }: THProps) => {
  return (
    <th className="p-4" {...rest}>
      <p className="antialiased font-sans font-bold text-sm flex items-center justify-between gap-2 leading-none opacity-70">
        {children}
      </p>
    </th>
  );
};
