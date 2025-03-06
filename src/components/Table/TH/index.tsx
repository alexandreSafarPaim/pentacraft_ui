import React from 'react';
import { twMerge } from 'tailwind-merge';

export const PCLayoutTH = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <th className="p-4">
      <p className={twMerge("antialiased font-sans font-bold text-sm flex items-center justify-between gap-2 leading-none opacity-70", className)}>
        {children}
      </p>
    </th>
  );
};
