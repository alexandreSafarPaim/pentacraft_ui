import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FormContext } from '../../contexts/formContext';

export const PCLayoutFilters = ({
  onSubmit,
  onClear,
  children,
  actions,
  closeOnSubmit,
  closeOnClear,
}: {
  onSubmit?: (values: Object, formData: FormData) => void;
  onClear?: () => void;
  children?: React.ReactNode;
  actions?: () => React.ReactNode;
  closeOnSubmit?: boolean;
  closeOnClear?: boolean;
}) => {
  const scheme = useTheme();

  const [openFilter, setOpenFilter] = useState(false);
  const [clickFirstTime, setClickFirstTime] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const values: any = {};

    data.forEach((value, key) => {
      if (values[key]) {
        if (!Array.isArray(values[key])) {
          values[key] = [values[key]];
        }
        values[key].push(value);
      } else {
        values[key] = value;
      }
    });

    const finalValues: any = {};

    Object.keys(values).forEach(key => {
      const newKey = key.replace('[]', '');
      finalValues[newKey] = values[key];
    });

    onSubmit?.(finalValues, data);
  };

  const clickOut = (event: MouseEvent) => {
    if (button.current && button.current.contains(event.target as Node)) {
      return;
    }
    if (form.current && !form.current.contains(event.target as Node)) {
      setOpenFilter(false);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('click', clickOut);
    }
    return () => {
      if (window) {
        window.removeEventListener('click', clickOut);
      }
    };
  }, []);

  return (
    <FormContext.Provider
      value={{
        formRef: form,
      }}
    >
      <div className="h-12 w-full flex items-center relative z-20">
        <button
          type="button"
          className={`px-3 py-1 rounded-lg text-sm font-bold`}
          style={{
            backgroundColor: scheme?.buttonPrimary,
            color: scheme?.buttonPrimaryText,
            transition:
              'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
          }}
          onClick={() => {
            if (!clickFirstTime) {
              setClickFirstTime(true);
            }
            setOpenFilter(!openFilter);
          }}
          ref={button}
        >
          Filtros
        </button>
        {clickFirstTime && (
          <div
            className={`absolute top-12 max-w-full rounded-b-lg rounded-se-lg  ${
              openFilter ? 'max-h-screen' : 'max-h-0 overflow-auto'
            }`}
            style={{
              minWidth: '60%',
              transition:
                'max-height 0.1s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out, overflow 0.3s ease-in-out',
              backgroundColor: scheme?.backgroundSecondary,
            }}
          >
            <form
              className="flex flex-col p-3 border border-slate-700 rounded-lg"
              onSubmit={handleFormSubmit}
              ref={form}
            >
              {children}
              <div className="flex justify-end">
                {actions && actions()}
                <button
                  type="reset"
                  className="px-3 py-1 bg-slate-700 text-slate-100 rounded-lg mr-2"
                  onClick={() => {
                    form.current?.reset();
                    onClear?.();
                    if (closeOnClear) {
                      setOpenFilter(false);
                    }
                  }}
                >
                  Limpar filtros
                </button>
                <button
                  onClick={() => {
                    if (closeOnSubmit) {
                      setOpenFilter(false);
                    }
                  }}
                  type="submit"
                  className="px-3 py-1 bg-slate-700 text-slate-100 rounded-lg"
                >
                  Filtrar
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </FormContext.Provider>
  );
};
