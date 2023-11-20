import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { BiChevronDown, BiChevronUp, BiSolidTagAlt } from 'react-icons/bi';
import { NavigationButton } from '../../Inputs/NavigationButton';
import { LayoutMenuContext } from '../../../contexts/context';
import { PCLayoutMenuCollapseItemProps, PCLayoutMenuItemProps } from '../../../types/types';

export const PCLayoutMenuItem = ({
  children,
  href,
  collapseItens,
  icon,
}: PCLayoutMenuItemProps) => {
  const { showMenu, scheme } = React.useContext(LayoutMenuContext);

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (collapseItens && collapseItens.length > 0) {
        collapseItens.forEach(item => {
          if (item.href && path.includes(item.href)) {
            setActive(true);
          }
        });
      } else if (href && path.includes(href)) {
        setActive(true);
      }
    }
  }, [window]);

  const Icon = useMemo(() => {
    return icon ?? BiSolidTagAlt;
  }, [icon]);

  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <div
      className={`flex flex-col relative z-30`}
      style={{
        color: active
          ? scheme?.buttonSecondaryTextHover
          : scheme?.buttonSecondaryText,
        transition: 'color 0.3s ease-in-out',
      }}
    >
      <NavigationButton
        href={href}
        onClick={() => {
          if (collapseItens) setShowSubMenu(!showSubMenu);
        }}
      >
        <div className="w-[20px] h-[20px]">
          <Icon size={20} />
        </div>
        <span
          className="pl-2 whitespace-nowrap"
          style={{
            opacity: showMenu ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          {children}
        </span>
        {collapseItens && (
          <div className="w-[14px] h-[14px] ml-2">
            {showSubMenu ? (
              <BiChevronUp size={14} />
            ) : (
              <BiChevronDown size={14} />
            )}
          </div>
        )}
      </NavigationButton>
      <div
        className={`mx-4 rounded-md overflow-hidden z-30`}
        style={{
          transition: 'all 0.3s ease-in-out',
          marginBlock: showSubMenu ? '0.2rem' : '0',
          maxHeight: showSubMenu ? 'calc(2rem * 4)' : '0',
          position: !showMenu ? 'fixed' : 'relative',
          left: !showMenu ? `calc(2rem * 1.2)` : '0',
          backgroundColor: scheme?.secondary,
        }}
      >
        <div className="p-1 flex flex-col">
          {collapseItens?.map((item, index) => (
            <PCLayoutMenuCollapseItem
              showSubMenu={showSubMenu}
              key={index}
              href={item.href}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function PCLayoutMenuCollapseItem({
  showSubMenu,
  href,
  label,
}: PCLayoutMenuCollapseItemProps) {
  const { showMenu } = React.useContext(LayoutMenuContext);

  return (
    <Link
      href={href ?? '#'}
      className="flex items-center h-8 text-center w-full"
      style={{
        transition: 'background-color 0.3s ease-in-out',
        justifyContent: !showMenu ? 'center' : 'flex-start',
        paddingInline: !showMenu ? '0.8rem' : '0',
      }}
    >
      <span
        className={`text-white hover:text-slate-200 `}
        style={{
          opacity: !showMenu && !showSubMenu ? 0 : 1,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {label}
      </span>
    </Link>
  );
}
