import React, { useEffect, useMemo, useState } from 'react';
import { BiSolidTagAlt } from 'react-icons/bi';
import { NavigationButton } from '../../Inputs/NavigationButton';
import { LayoutMenuContext } from '../context';
import { PCLayoutMenuEndItemProps } from '../types';

export const PCLayoutMenuEndItem = ({
  children,
  href,
  icon,
  onClick,
}: PCLayoutMenuEndItemProps) => {
  const { showMenu, scheme } = React.useContext(LayoutMenuContext);

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (href && path.includes(href)) {
        setActive(true);
      }
    }
  }, [window]);

  const Icon = useMemo(() => {
    return icon ?? BiSolidTagAlt;
  }, [icon]);

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
          if (onClick) onClick();
        }}
      >
        <div className="w-[20px] h-[20px]">
          <Icon size={20} />
        </div>
        <span
          className="pl-2"
          style={{
            opacity: showMenu ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          {children}
        </span>
      </NavigationButton>
    </div>
  );
};
