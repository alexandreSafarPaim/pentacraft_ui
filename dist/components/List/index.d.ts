import React from 'react';
declare const List: {
    Root: ({ children, title, createButtonTitle, onCreateClick, createButtonHref, }: {
        children?: React.ReactNode;
        title?: string | undefined;
        createButtonTitle?: string | undefined;
        onCreateClick?: (() => void) | undefined;
        createButtonHref?: string | undefined;
    }) => React.JSX.Element;
    Content: ({ children, }: {
        children: React.ReactNode;
    }) => React.JSX.Element;
    Filters: ({ onSubmit, onClear, children, }: {
        onSubmit?: ((values: Object) => void) | undefined;
        onClear?: (() => void) | undefined;
        children?: React.ReactNode;
    }) => React.JSX.Element;
};
export default List;
