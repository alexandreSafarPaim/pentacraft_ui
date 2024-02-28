import React from 'react';

export const PCLayoutTH = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <th className="p-4">
      <p className="antialiased font-sans font-bold text-sm flex items-center justify-between gap-2 leading-none opacity-70">
        {children}
      </p>
    </th>
  );
};
