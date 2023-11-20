import React from 'react';
import { PCLayoutLogoProps } from '../../../types/types';

export const PCLayoutLogo = ({ src, element }: PCLayoutLogoProps) => {
  if (src) {
    return <img src={src} alt="Logo" className="h-full" />;
  }
  if (element) {
    return (
      <>
        {element()}
      </>)
  }
  return null;
};
