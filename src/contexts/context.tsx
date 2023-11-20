import React from 'react';
import { LayoutMenuContextType } from '../types/types';

export const LayoutMenuContext = React.createContext<LayoutMenuContextType>({
  showMenu: false,
});
