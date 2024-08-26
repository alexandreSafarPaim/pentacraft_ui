import React from 'react';
import { PCLayoutPagination } from '../Pagination';
import { PCLayoutTBody } from './TBody';
import { PCLayoutTHead } from './THead';
import { PCLayoutTD } from './TD';
import { PCLayoutTH } from './TH';
import { PCLayoutTR } from './TR';
export declare const PCLayoutTable: ({ children }: {
    children?: React.ReactNode;
}) => React.JSX.Element;
declare const Table: {
    Root: typeof PCLayoutTable;
    TBody: typeof PCLayoutTBody;
    THead: typeof PCLayoutTHead;
    TH: typeof PCLayoutTH;
    TD: typeof PCLayoutTD;
    TR: typeof PCLayoutTR;
    Pagination: typeof PCLayoutPagination;
};
export default Table;
