import React from 'react';
import { LayoutMenuContext } from '../contexts/context';

export function useTheme() {
    const { scheme } = React.useContext(LayoutMenuContext);
    return scheme;
}