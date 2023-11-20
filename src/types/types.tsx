import { IconType } from 'react-icons';

export type LayoutProps = {
  children: React.ReactNode;
  themeSwitcher?: boolean;
  colorSchemeDefault?: ColorScheme;
  colorSchemeDark?: ColorScheme;
};

export type LayoutMenuContextType = {
  showMenu: boolean;
  setShowMenu?: (value: boolean) => void;
  scheme?: ColorScheme;
};

export type PCLayoutMenuCollapseItemProps = {
  label: string;
  href?: string;
  showSubMenu: boolean;
};

export type PCLayoutMenuItemProps = {
  children: React.ReactNode;
  href?: string;
  icon?: IconType;
  collapseItens?: {
    label: string;
    href?: string;
  }[];
};

export type PCLayoutMenuEndItemProps = {
  children: React.ReactNode;
  href?: string;
  icon?: IconType;
  onClick?: () => void;
};

export type PCLayoutLogoProps = {
  src?: string;
  element?: () => React.ReactNode;
};

export type ColorScheme = {
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

export type PCLayoutButtonProps = React.ButtonHTMLAttributes<
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

export type PCLayoutInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  containerClassName?: string;
  customInput?: (
    prop: Omit<PCLayoutInputProps, 'customInput' | 'ContainerClassName'>
  ) => React.ReactNode | React.ReactNode;
  suffixElement?: () => React.ReactNode | React.ReactNode;
  prefixElement?: () => React.ReactNode | React.ReactNode;
};

export type PCLayoutNavigationButtonProps = React.ButtonHTMLAttributes<
  HTMLButtonElement
> & {
  children: React.ReactNode;
  href?: string;
  fill?: boolean;
};