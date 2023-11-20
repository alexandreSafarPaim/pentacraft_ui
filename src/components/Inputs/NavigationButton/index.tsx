import Link from 'next/link';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../../hooks/useTheme';
import { PCLayoutNavigationButtonProps } from '../../../types/types';

export const NavigationButton = ({
  children,
  href,
  onClick,
  className,
  style,
  fill,
}: PCLayoutNavigationButtonProps) => {
  const scheme = useTheme();
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  if (!href) {
    return (
      <button
        type="button"
        className={twMerge(
          `flex items-center h-8 text-left w-full px-4 hover hover:text-white hover:bg-slate-900`,
          className
        )}
        style={{
          transition:
            'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
          backgroundColor: fill
            ? hover
              ? scheme?.buttonPrimaryHover
              : scheme?.buttonPrimary
            : 'inherit',
          color: fill
            ? hover
              ? scheme?.buttonPrimaryTextHover
              : scheme?.buttonPrimaryText
            : 'inherit',
          ...style,
        }}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link
        href={href ?? '#'}
        className={`flex items-center h-8 text-left w-full px-4 hover:text-white hover:bg-slate-900`}
        style={{
          transition: 'background-color 0.3s ease-in-out',
        }}
      >
        {children}
      </Link>
    );
  }
};
