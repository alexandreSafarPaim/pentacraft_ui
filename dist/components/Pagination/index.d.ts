import React from 'react';
export declare const PCLayoutPagination: ({ currentPage, totalPages, perPage, onChangePerPage, onChangePage, }: {
    currentPage: number;
    totalPages: number;
    perPage?: number | undefined;
    onChangePerPage?: ((perPage: number) => void) | undefined;
    onChangePage: (page: number) => void;
}) => React.JSX.Element;
