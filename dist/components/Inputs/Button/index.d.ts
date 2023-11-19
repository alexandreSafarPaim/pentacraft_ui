import React from 'react';
export declare type PCLayoutButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};
export declare const Button: ({ children, onClick, className, style, ...props }: PCLayoutButtonProps) => React.JSX.Element;
