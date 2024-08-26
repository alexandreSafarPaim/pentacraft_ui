import React from 'react';
import { PCLayoutFilters } from '../Filter';
import { PCLayoutListContent } from './ListContent';
declare const PCLayoutList: ({ children, title, createButtonTitle, onCreateClick, createButtonHref, renderPreList, renderPosList, actions, }: {
    children?: React.ReactNode;
    title?: string | undefined;
    createButtonTitle?: string | undefined;
    onCreateClick?: (() => void) | undefined;
    createButtonHref?: string | undefined;
    renderPreList?: (() => React.ReactNode) | undefined;
    renderPosList?: (() => React.ReactNode) | undefined;
    actions?: (() => React.ReactNode) | undefined;
}) => React.JSX.Element;
declare const List: {
    Root: typeof PCLayoutList;
    Content: typeof PCLayoutListContent;
    Filters: typeof PCLayoutFilters;
};
export default List;
