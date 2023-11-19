import React, { useEffect, useRef, useState } from 'react';
import { LayoutMenuContext } from '../../Layout/context';

export const PCLayoutFilters = ({
  onSubmit,
  onClear,
  children,
}: {
  onSubmit?: (values: Object) => void;
  onClear?: () => void;
  children?: React.ReactNode;
}) => {
  const { scheme } = React.useContext(LayoutMenuContext);

  const [openFilter, setOpenFilter] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const entries = data.entries();
    const values = Object.fromEntries(entries);
    onSubmit?.(values);
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
  }, [window]);

  return (
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
        onClick={() => setOpenFilter(!openFilter)}
        ref={button}
      >
        Filtros
      </button>
      <div
        className={`absolute top-12 max-w-full rounded-b-lg rounded-se-lg overflow-hidden ${
          openFilter ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{
          minWidth: '60%',
          transition:
            'max-height 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out',
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
            <button
              type="button"
              className="px-3 py-1 bg-slate-700 text-slate-100 rounded-lg mr-2"
              onClick={() => {
                form.current?.reset();
                onClear?.();
              }}
            >
              Limpar filtros
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-slate-700 text-slate-100 rounded-lg"
            >
              Filtrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
