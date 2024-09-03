import React from 'react';
import { FormContextType } from '../types/types';

export const FormContext = React.createContext<FormContextType>({
  formRef: { current: null },
});
