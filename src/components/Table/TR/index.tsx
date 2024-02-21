import React, { HTMLAttributes } from 'react';

interface TRProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
}

export const PCLayoutTR = ({ children, ...rest }: TRProps) => {
  return <tr {...rest}>{children}</tr>;
};
