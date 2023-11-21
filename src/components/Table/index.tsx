import React, { useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { childrenWithout, defineChildrenElement } from '../../utils/element';
import { PCLayoutPagination } from './Pagination';
import { PCLayoutTBody } from './TBody';
import { PCLayoutTHead } from './THead';
import { PCLayoutTD } from './TD';
import { PCLayoutTH } from './TH';
import { PCLayoutTR } from './TR';

export const PCLayoutTable = ({ children }: { children?: React.ReactNode }) => {
  const scheme = useTheme();

  const pagination = useMemo(() => {
    if (!children) {
      return null;
    }
    const defaultLogo = null;
    return defineChildrenElement(children, 'Pagination', defaultLogo);
  }, [children]);

  const restChildren = useMemo(() => {
    if (!children) {
      return null;
    }
    return childrenWithout(children, ['Pagination']);
  }, [children]);

  return (
    <div
      className={`flex flex-col h-[98%] w-full rounded-xl overflow-hidden`}
      style={{
        boxShadow: '0 0 10px -3px #0000007b',
        backgroundColor: scheme?.backgroundSecondary,
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <div
        className={`flex-1 overflow-y-auto`}
        style={{
          maxHeight: `calc(100% - ${pagination ? '3rem' : '0.5rem'})`,
        }}
      >
        <table className="w-full min-w-max table-auto text-left relative">
          {restChildren}
        </table>
      </div>
      {pagination}
    </div>
  );
};

const Table = {
  Root: PCLayoutTable,
  TBody: PCLayoutTBody,
  THead: PCLayoutTHead,
  TH: PCLayoutTH,
  TD: PCLayoutTD,
  TR: PCLayoutTR,
  Pagination: PCLayoutPagination,
};

export default Table;
