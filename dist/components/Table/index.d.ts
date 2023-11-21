import React from 'react';
export declare const PCLayoutTable: ({ children }: {
    children?: React.ReactNode;
}) => React.JSX.Element;
declare const Table: {
    Root: ({ children }: {
        children?: React.ReactNode;
    }) => React.JSX.Element;
    TBody: ({ children }: {
        children: React.ReactNode;
    }) => React.JSX.Element;
    THead: ({ children }: {
        children: React.ReactNode;
    }) => React.JSX.Element;
    TH: ({ children }: {
        children?: React.ReactNode;
    }) => React.JSX.Element;
    TD: ({ children, className, }: {
        children?: React.ReactNode;
        className?: string | undefined;
    }) => React.JSX.Element;
    TR: ({ children }: {
        children?: React.ReactNode;
    }) => React.JSX.Element;
    Pagination: ({ currentPage, totalPages, perPage, onChangePerPage, onChangePage, }: {
        currentPage: number;
        totalPages: number;
        perPage?: number | undefined;
        onChangePerPage?: ((perPage: number) => void) | undefined;
        onChangePage: (page: number) => void;
    }) => React.JSX.Element;
};
export default Table;
