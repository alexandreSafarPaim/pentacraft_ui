import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { defineAllChildrenElement } from '../../../utils/element';
import { capitalizeName, returnInitials } from '../../../utils/format';
import { LayoutMenuContext } from '../context';

export function PCLayoutHeaderMenu({
  userName,
  userImage,
  children,
}: {
  userName?: string;
  userImage?: string;
  children: React.ReactNode;
}) {
  const { scheme } = React.useContext(LayoutMenuContext);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const headerMenuItem = useMemo(() => {
    return defineAllChildrenElement(children, 'HeaderMenuItem');
  }, [children]);

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
        {userName ? (
          returnInitials(userName)
        ) : userImage ? (
          <img src={userImage} alt="Profile" className="h-full" />
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
        <div className="px-3 py-2">
          <span className="whitespace-nowrap font-bold h-8">
            {userName && capitalizeName(userName)}
          </span>
          <div className="flex flex-col w-full">{headerMenuItem}</div>
        </div>
      </div>
    </div>
  );
}

export function PCLayoutHeaderMenuItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link href={href ?? '#'} className="w-full text-left h-8 flex items-center">
      {children}
    </Link>
  );
}
