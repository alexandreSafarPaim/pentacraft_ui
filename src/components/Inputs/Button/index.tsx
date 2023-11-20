import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../../hooks/useTheme';
import { PCLayoutButtonProps } from '../../../types/types';



export const Button = ({
  children,
  onClick,
  className,
  style,
  ...props
}: PCLayoutButtonProps) => {
  const scheme = useTheme()
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <button
      type="button"
      className={twMerge(
        `flex items-center h-8 text-left w-full px-4 rounded`,
        className
      )}
      style={{
        transition: 'background-color 0.3s ease-in-out',
        backgroundColor: hover
          ? scheme?.buttonPrimaryHover
          : scheme?.buttonPrimary,
        color: hover
          ? scheme?.buttonPrimaryTextHover
          : scheme?.buttonPrimaryText,
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};
