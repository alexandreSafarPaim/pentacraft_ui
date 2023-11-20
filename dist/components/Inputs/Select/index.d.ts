import React from 'react';
interface IMultiselectProps {
    name: string;
    options: ISelectOption[];
    placeholder?: string;
    value: string | string[];
    multiple?: boolean;
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    error?: string;
}
interface ISelectOption {
    value: string;
    label: string;
}
export declare const CustomSelect: ({ name, options, placeholder, value, multiple, className, style, label, error, }: IMultiselectProps) => React.JSX.Element;
export {};
