import React from 'react';
import { PCLayoutHeaderActions } from './HeaderActions';
import { PCLayoutHeaderMenu, PCLayoutHeaderMenuItem } from './HeaderMenu';
import { LayoutProps } from './types';
declare const Layout: {
    Root: ({ children, themeSwitcher, colorSchemeDark, colorSchemeLight, }: LayoutProps) => React.JSX.Element;
    Logo: ({ src, element }: import("./types").PCLayoutLogoProps) => React.JSX.Element | null;
    Menu: ({ children, style, className, }: {
        children: React.ReactNode;
        style?: React.CSSProperties | undefined;
        className?: string | undefined;
    }) => React.JSX.Element;
    MenuItem: ({ children, href, collapseItens, icon, }: import("./types").PCLayoutMenuItemProps) => React.JSX.Element;
    MenuEndItem: ({ children, href, icon, onClick, }: import("./types").PCLayoutMenuEndItemProps) => React.JSX.Element;
    HeaderMenu: typeof PCLayoutHeaderMenu;
    HeaderMenuItem: typeof PCLayoutHeaderMenuItem;
    Content: ({ children, }: {
        children?: React.ReactNode;
    }) => React.JSX.Element;
    HeaderActions: typeof PCLayoutHeaderActions;
};
export default Layout;
