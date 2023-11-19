/// <reference types="react" />
import { IconType } from 'react-icons';
export declare type LayoutProps = {
    children: React.ReactNode;
    themeSwitcher?: boolean;
    colorSchemeLight?: ColorScheme;
    colorSchemeDark?: ColorScheme;
};
export declare type LayoutMenuContextType = {
    showMenu: boolean;
    setShowMenu?: (value: boolean) => void;
    scheme?: ColorScheme;
};
export declare type PCLayoutMenuCollapseItemProps = {
    label: string;
    href?: string;
    showSubMenu: boolean;
};
export declare type PCLayoutMenuItemProps = {
    children: React.ReactNode;
    href?: string;
    icon?: IconType;
    collapseItens?: {
        label: string;
        href?: string;
    }[];
};
export declare type PCLayoutMenuEndItemProps = {
    children: React.ReactNode;
    href?: string;
    icon?: IconType;
    onClick?: () => void;
};
export declare type PCLayoutLogoProps = {
    src?: string;
    element?: React.ReactElement;
};
export declare type ColorScheme = {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    background?: string;
    backgroundSecondary?: string;
    textPrimary?: string;
    textPrimaryHover?: string;
    textSecondary?: string;
    textSecondaryHover?: string;
    buttonPrimary?: string;
    buttonPrimaryHover?: string;
    buttonSecondary?: string;
    buttonSecondaryHover?: string;
    buttonPrimaryText?: string;
    buttonPrimaryTextHover?: string;
    buttonSecondaryText?: string;
    buttonSecondaryTextHover?: string;
    inputPrimaryBackground?: string;
    inputPrimaryText?: string;
    inputPrimaryPlaceholder?: string;
    inputPrimaryBorder?: string;
    inputSecondaryBackground?: string;
    inputSecondaryText?: string;
    inputSecondaryPlaceholder?: string;
    inputSecondaryBorder?: string;
    success?: string;
    warning?: string;
    error?: string;
    info?: string;
};
