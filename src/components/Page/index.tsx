import React, { useMemo } from 'react';
import { defineChildrenElement } from '../../utils/element';
import { PCLayoutFilters } from '../Filter';
import { PCLayoutPagination } from '../Pagination';
import { PCLayoutPageContent } from './PageContent';

const PCLayoutPage = ({
  children,
  title,
  actions,
}: {
  children?: React.ReactNode;
  title?: string;
  actions?: () => React.ReactNode;
}) => {
  const filters = useMemo(() => {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutFilters.name, null);
    } else {
      return defineChildrenElement(children, Page.Filters.name, null);
    }
  }, [children]);

  const content = useMemo(() => {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutPageContent.name, null);
    } else {
      return defineChildrenElement(children, Page.Content.name, null);
    }
  }, [children]);
  const pagination = useMemo(() => {
    if (!children) {
      return null;
    }
    const defaultLogo = null;
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutPagination.name, defaultLogo);
    } else {
      return defineChildrenElement(children, Page.Pagination.name, defaultLogo);
    }
  }, [children]);

  return (
    <div className="w-full flex flex-col px-3 pt-2"
    style={{
      height: 'calc(100vh - 4.2rem)',

    }}
    >
      <div className="flex items-center justify-between">
        {title && <h1 className="text-3xl font-bold mb-2">{title}</h1>}
        <div
          className="flex items-center"
          style={{
            gap: '0.5rem',
          }}
        >
          {actions?.()}
        </div>
      </div>
      <div>
      {filters}
      </div>
      <div
        className=" w-full flex flex-col flex-1 "
      >
        <div className="w-full flex-1">{content}</div>
        <div>
          {pagination}
        </div>
      </div>
    </div>
  );
};

const Page: {
  Root: typeof PCLayoutPage;
  Content: typeof PCLayoutPageContent;
  Pagination: typeof PCLayoutPagination;
  Filters: typeof PCLayoutFilters;
} = {
  Root: PCLayoutPage,
  Content: PCLayoutPageContent,
  Pagination: PCLayoutPagination,
  Filters: PCLayoutFilters,
};

export default Page;
