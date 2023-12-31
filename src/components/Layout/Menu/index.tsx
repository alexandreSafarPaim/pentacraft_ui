import React, { useMemo } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { defineAllChildrenElement } from '../../../utils/element';
import { LayoutMenuContext } from '../../../contexts/context';
import Layout from '..';
import { PCLayoutMenuItem } from '../MenuItem';
import { PCLayoutMenuEndItem } from '../MenuEndItem';

export const PCLayoutMenu = ({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) => {
  const { showMenu, scheme, setShowMenu } = React.useContext(LayoutMenuContext);

  const menuItems = useMemo(() => {
    if (process.env.NODE_ENV == 'development') {
      return defineAllChildrenElement(children, PCLayoutMenuItem.name);
    } else {
      return defineAllChildrenElement(children, Layout.MenuItem.name);
    }
  }, [children]);

  const endItens = useMemo(() => {
    if (process.env.NODE_ENV == 'development') {
      return defineAllChildrenElement(children, PCLayoutMenuEndItem.name);
    } else {
      return defineAllChildrenElement(children, Layout.MenuEndItem.name);
    }
  }, [children]);

  // return <div className="flex flex-col gap-1 w-full z-30">{menuItems}</div>;
  return (
    <div
      className={twMerge(`flex flex-col overflow-hidden z-30`, className)}
      style={{
        maxWidth: showMenu ? '50vw ' : '3rem',
        transition:
          'max-width 0.3s ease-in-out, background-color 0.3s ease-in-out',
        boxShadow: '-2px 0 10px rgba(0,0,0,0.5)',
        backgroundColor: scheme?.primary,
        ...style,
      }}
    >
      <button
        type="button"
        className={`self-end mr-3 mt-1 mb-4`}
        style={{
          color: scheme?.buttonPrimary,
          transition: 'color 0.3s ease-in-out',
        }}
        onClick={() => setShowMenu?.(!showMenu)}
      >
        {showMenu ? <MdClose size={20} /> : <GiHamburgerMenu size={20} />}
      </button>
      <div className="w-full h-full z-30 flex flex-col">
        <div className="flex flex-col gap-1 flex-1">{menuItems}</div>
        {endItens.length > 0 && (
          <div
            className="pt-3 border-t flex flex-col gap-1 mb-3 "
            style={{
              borderColor: scheme?.secondary,
            }}
          >
            {endItens}
          </div>
        )}
      </div>
    </div>
  );
};
