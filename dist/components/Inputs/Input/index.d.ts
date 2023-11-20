import React from 'react';
export declare type PCLayoutInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    containerClassName?: string;
    customInput?: (...prop: any) => React.ReactNode | React.ReactNode;
    suffixElement?: () => React.ReactNode | React.ReactNode;
    prefixElement?: () => React.ReactNode | React.ReactNode;
};
export declare const Input: ({ label, error, containerClassName, customInput, ...props }: PCLayoutInputProps) => React.JSX.Element;
