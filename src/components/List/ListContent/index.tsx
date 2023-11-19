import React, { useMemo } from 'react';
import { defineChildrenElement } from '../../../utils/element';

export const PCLayoutListContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const table = useMemo(() => {
    if (!children) {
      return null;
    }
    return defineChildrenElement(children, 'Table', null);
  }, [children]);

  return <div className="w-full h-full">{table ?? children}</div>;
};
