import React, {TdHTMLAttributes} from 'react';
import { twMerge } from 'tailwind-merge';

interface TDProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  className?: string;
}

export const PCLayoutTD = ({
  children,
  className,
  ...rest
}: TDProps
) => {
  return <td className={twMerge(
    "p-4 border-b border-blue-gray-50",
    className
  )}
  {...rest}
  >{children}</td>;
};
