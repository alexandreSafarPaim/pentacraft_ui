import React from 'react';
export declare type PCLayoutNavigationButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    href?: string;
    fill?: boolean;
};
export declare const NavigationButton: ({ children, href, onClick, className, style, fill, }: PCLayoutNavigationButtonProps) => React.JSX.Element;
