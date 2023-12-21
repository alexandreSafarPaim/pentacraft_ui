import React, { useMemo } from 'react';
import { defineChildrenElement } from '../../../utils/element';
import Table, { PCLayoutTable } from '../../Table';

export const PCLayoutListContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const table = useMemo(() => {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutTable.name, null);
    } else {
      return defineChildrenElement(children, Table.Root.name, null);
    }
  }, [children]);

  return <div className="w-full h-full">{table ?? children}</div>;
};
