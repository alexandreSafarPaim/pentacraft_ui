import React from 'react';
import { PCLayoutFilters } from '../Filter';
import { PCLayoutPagination } from '../Pagination';
import { PCLayoutPageContent } from './PageContent';
declare const PCLayoutPage: ({ children, title, actions, }: {
    children?: React.ReactNode;
    title?: string | undefined;
    actions?: (() => React.ReactNode) | undefined;
}) => React.JSX.Element;
declare const Page: {
    Root: typeof PCLayoutPage;
    Content: typeof PCLayoutPageContent;
    Pagination: typeof PCLayoutPagination;
    Filters: typeof PCLayoutFilters;
};
export default Page;
