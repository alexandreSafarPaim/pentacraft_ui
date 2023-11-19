import React from 'react';
export interface PCLayoutFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    title?: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>, values: any) => void;
}
export declare const PCLayoutForm: ({ children, onSubmit, className, style, title, ...props }: PCLayoutFormProps) => React.JSX.Element;
export declare const PCLayoutFormActions: ({ children, }: {
    children?: React.ReactNode;
}) => React.JSX.Element;
export declare const PCLayoutFormContent: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
declare const Form: {
    Root: ({ children, onSubmit, className, style, title, ...props }: PCLayoutFormProps) => React.JSX.Element;
    Actions: ({ children, }: {
        children?: React.ReactNode;
    }) => React.JSX.Element;
    Content: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
};
export default Form;
