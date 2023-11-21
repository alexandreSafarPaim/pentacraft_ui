import React from 'react';
interface IMultiselectProps {
    name: string;
    options: ISelectOption[];
    placeholder?: string;
    value?: string | string[];
    multiple?: boolean;
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    error?: string;
    onChange?: (value: string | string[] | undefined) => void;
}
interface ISelectOption {
    value: string;
    label: string;
}
export declare const CustomSelect: ({ name, options, placeholder, value, multiple, className, style, label, error, onChange, }: IMultiselectProps) => React.JSX.Element;
export {};
