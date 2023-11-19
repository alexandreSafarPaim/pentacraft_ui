import React from 'react';
import { LayoutMenuContext } from '../../Layout/context';

export const PCLayoutTHead = ({ children }: { children: React.ReactNode }) => {
  const { scheme } = React.useContext(LayoutMenuContext);
  return (
    <thead
      className={`sticky top-0 z-10`}
      style={{
        borderCollapse: 'separate',
        backgroundColor: scheme?.tertiary,
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <tr>{children}</tr>
      <tr>
        <th className="h-[1px] bg-slate-200" colSpan={6} />
      </tr>
    </thead>
  );
};
