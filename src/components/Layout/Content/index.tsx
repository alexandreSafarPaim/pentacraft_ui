import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../../hooks/useTheme';

export const PCLayoutContent = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const scheme = useTheme();

  const rootClass = useMemo(() => {
    const rclass = 'flex-1 max-w-full max-h-full overflow-auto';
    return twMerge(rclass);
  }, [scheme]);
  return (
    <div
      className={rootClass}
      style={{
        backgroundColor: scheme?.background,
        color: scheme?.textPrimary,
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};
