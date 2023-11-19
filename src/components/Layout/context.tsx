import React from 'react';
import { LayoutMenuContextType } from './types';

export const LayoutMenuContext = React.createContext<LayoutMenuContextType>({
  showMenu: false,
});
