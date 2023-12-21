import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { dark, light } from '../../config/themes';
import { LayoutMenuContext } from '../../contexts/context';
import { LayoutProps } from '../../types/types';
import { defineChildrenElement } from '../../utils/element';
import { Switcher } from '../Inputs/Switcher';
import { PCLayoutContent } from './Content';
import { PCLayoutHeaderActions } from './HeaderActions';
import { PCLayoutHeaderMenu, PCLayoutHeaderMenuItem } from './HeaderMenu';
import { PCLayoutLogo } from './Logo';
import { PCLayoutMenu } from './Menu';
import { PCLayoutMenuEndItem } from './MenuEndItem';
import { PCLayoutMenuItem } from './MenuItem';

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
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutLogo.name, defaultLogo);
    } else {
      return defineChildrenElement(children, Layout.Logo.name, defaultLogo);
    }
  }, [children]);

  const menu = useMemo(() => {
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutMenu.name, null);
    } else {
      return defineChildrenElement(children, Layout.Menu.name, null);
    }
  }, [children]);

  const headerMenu = useMemo(() => {
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutHeaderMenu.name, null);
    } else {
      return defineChildrenElement(children, Layout.HeaderMenu.name, null);
    }
  }, [children]);

  const content = useMemo(() => {
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutContent.name, null);
    } else {
      return defineChildrenElement(children, Layout.Content.name, null);
    }
  }, [children]);

  const headerActions = useMemo(() => {
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutHeaderActions.name, null);
    } else {
      return defineChildrenElement(children, Layout.HeaderActions.name, null);
    }
  }, [children]);

  const scheme = useMemo(() => {
    if (isDark) {
      return {
        ...dark,
        ...colorSchemeDark,
      };
    }
    return {
      ...light,
      ...colorSchemeDefault,
    };
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
