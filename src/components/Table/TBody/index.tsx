import React, { HTMLAttributes } from 'react';

interface TBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const PCLayoutTBody = ({ children, ...rest }: TBodyProps) => {
  return <tbody {...rest}>{children}</tbody>;
};
