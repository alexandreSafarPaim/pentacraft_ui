import React, { useMemo, useState } from 'react';
import Layout from '..';
import { useTheme } from '../../../hooks/useTheme';
import { defineAllChildrenElement } from '../../../utils/element';
import { capitalizeName, returnInitials } from '../../../utils/format';
import { NavigationButton } from '../../Inputs';
import { PCLayoutMenuItem } from '../MenuItem';

export function PCLayoutHeaderMenu({
  userName,
  customAvatar,
  userImage,
  children,
}: {
  userName?: string;
  userImage?: string;
  customAvatar?: ({
    userName,
    userImage,
  }: {
    userName?: string;
    userImage?: string;
  }) => React.ReactNode;
  children: React.ReactNode;
}) {
  const scheme = useTheme();

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const headerMenuItem = useMemo(() => {
    if (process.env.NODE_ENV == 'development') {
      return defineAllChildrenElement(children, PCLayoutHeaderMenuItem.name);
    } else {
      return defineAllChildrenElement(children, Layout.HeaderMenuItem.name);
    }
  }, [children]);
  
  if (customAvatar) {
    return <>{customAvatar({ userName, userImage })}</>;
  }

  return (
    <div className="relative">
      <button
        className={`w-10 h-10 rounded-full font-bold`}
        style={{
          backgroundColor: scheme?.buttonPrimary,
          color: scheme?.buttonPrimaryText,
          transition:
            'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
        }}
        onClick={() => setShowProfileMenu(!showProfileMenu)}
      >
        {userImage ? (
          <img
            src={userImage}
            alt={userName}
            className="w-full h-full rounded-full"
          />
        ) : userName ? (
          <span className="w-full h-full flex items-center justify-center">
            {returnInitials(userName)}
          </span>
        ) : null}
      </button>
      <div
        className={`absolute shadow-2xl overflow-hidden rounded-lg z-10`}
        style={{
          top: 'calc(100% + 20px)',
          right: '0',
          maxHeight: showProfileMenu ? 'calc(2rem * 3 + 8px)' : '0',
          transition:
            'max-height 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out',
          color: scheme?.textPrimary,
          backgroundColor: scheme?.primary,
        }}
      >
        {headerMenuItem && (
          <div className="px-3 py-2">
            <span className="whitespace-nowrap font-bold h-8">
              {userName && capitalizeName(userName)}
            </span>
            <div className="flex flex-col w-full">{headerMenuItem}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export function PCLayoutHeaderMenuItem({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <NavigationButton
      href={href}
      onClick={onClick}
      className="w-full text-left h-8 flex items-center hover:bg-transparent hover:text-inherit p-0"
    >
      {children}
    </NavigationButton>
  );
}
