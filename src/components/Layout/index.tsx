import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { dark, light } from '../../config/themes';
import { defineChildrenElement } from '../../utils/element';
import { Switcher } from '../Inputs/Switcher';
import { PCLayoutContent } from './Content';
import { PCLayoutHeaderActions } from './HeaderActions';
import { PCLayoutHeaderMenu, PCLayoutHeaderMenuItem } from './HeaderMenu';
import { PCLayoutLogo } from './Logo';
import { PCLayoutMenu } from './Menu';
import { PCLayoutMenuEndItem } from './MenuEndItem';
import { PCLayoutMenuItem } from './MenuItem';
import { LayoutMenuContext } from '../../contexts/context';
import { LayoutProps } from '../../types/types';

const PCLayout = ({
  children,
  themeSwitcher,
  colorSchemeDark,
  colorSchemeDefault,
}: LayoutProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const logo = useMemo(() => {
    const defaultLogo = <h1 className="text-2xl">LOGO</h1>;
    return defineChildrenElement(children, 'Logo', defaultLogo);
  }, [children]);

  const menu = useMemo(() => {
    return defineChildrenElement(children, 'Menu', null);
  }, [children]);

  const headerMenu = useMemo(() => {
    return defineChildrenElement(children, 'HeaderMenu', null);
  }, [children]);

  const content = useMemo(() => {
    return defineChildrenElement(children, 'Content', null);
  }, [children]);

  const headerActions = useMemo(() => {
    return defineChildrenElement(children, 'HeaderActions', null);
  }, [children]);

  const scheme = useMemo(() => {
    if (isDark) {
      return colorSchemeDark ?? dark;
    }
    return colorSchemeDefault ?? light;
  }, [isDark, colorSchemeDark, colorSchemeDefault]);

  const handleSwitcherChange = useCallback(
    (value: boolean) => {
      setIsDark(value);
      localStorage.setItem('dark-mode', JSON.stringify(value));
    },
    [isDark]
  );

  useEffect(() => {
    const dark = localStorage.getItem('dark-mode');
    if (dark) {
      setIsDark(JSON.parse(dark));
    }
  }, []);

  return (
    <LayoutMenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
        scheme,
      }}
    >
      <div
        className={`w-screen, h-screen flex flex-col`}
        style={{
          color: scheme?.textPrimary,
          backgroundColor: scheme?.background,
          transition: 'color 0.3s ease-in-out',
        }}
      >
        <div
          className={`w-full h-16 flex items-center justify-between px-4 z-40`}
          style={{
            backgroundColor: scheme?.secondary,
            transition: 'background-color 0.3s ease-in-out',
          }}
        >
          <div className="h-full py-2">{logo}</div>
          <div className="flex items-center gap-4">
            {themeSwitcher && (
              <Switcher value={isDark} onChange={handleSwitcherChange} />
            )}
            {headerActions}
            {headerMenu}
          </div>
        </div>
        <div
          className="flex-1 flex relative"
          style={{
            maxHeight: 'calc(100vh - 4rem)',
          }}
        >
          {menu}
          {content}
        </div>
      </div>
    </LayoutMenuContext.Provider>
  );
};

const Layout = {
  Root: PCLayout,
  Logo: PCLayoutLogo,
  Menu: PCLayoutMenu,
  MenuItem: PCLayoutMenuItem,
  MenuEndItem: PCLayoutMenuEndItem,
  HeaderMenu: PCLayoutHeaderMenu,
  HeaderMenuItem: PCLayoutHeaderMenuItem,
  Content: PCLayoutContent,
  HeaderActions: PCLayoutHeaderActions,
};

export default Layout;
