import React from 'react';
import { PCLayoutButtonProps } from '../../../types/types';

export const LinkButton = ({
  children,
  onClick,
  className,
  style,
  href,
  target,
  download,
  ...props
}: PCLayoutButtonProps) => {
  if (href) {
    return (
      <a
        className="px-3 py-1 bg-slate-700 text-slate-100 rounded-lg mr-2"
        href={href}
        target={target}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="px-3 py-1 bg-slate-700 text-slate-100 rounded-lg mr-2"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
