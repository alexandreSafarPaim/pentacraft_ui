import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../hooks/useTheme';
import { defineChildrenElement } from '../../utils/element';

export interface PCLayoutFormProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  title?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>, values: any) => void;
}

export const PCLayoutForm = ({
  children,
  onSubmit,
  className,
  style,
  title,
  ...props
}: PCLayoutFormProps) => {
  const scheme = useTheme();

  const actions = useMemo(() => {
    if (!children) {
      return null;
    }
    return defineChildrenElement(children, 'FormActions', null);
  }, [children]);
  const content = useMemo(() => {
    if (!children) {
      return null;
    }
    return defineChildrenElement(children, 'FormContent', null);
  }, [children]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const entries = data.entries();
    const values = Object.fromEntries(entries);
    onSubmit?.(event, values);
  };

  return (
    <form
      {...props}
      className={twMerge(`flex flex-col w-full h-full`)}
      onSubmit={handleFormSubmit}
      style={{
        ...style,
      }}
    >
      <div className="w-full h-full flex flex-col px-3 pt-2">
        <div className="flex items-center justify-between">
          {title && <h1 className="text-3xl font-bold mb-2">{title}</h1>}
          {actions}
        </div>
        <div
          className={`flex flex-col h-[90%] w-full rounded-xl overflow-hidden`}
          style={{
            boxShadow: '0 0 10px -3px #0000007b',
            backgroundColor: scheme?.backgroundSecondary,
            transition: 'background-color 0.3s ease-in-out',
          }}
        >
          <div className={`w-ful h-full overflow-auto`}>{content}</div>
        </div>
      </div>
    </form>
  );
};

export const PCLayoutFormActions = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <div className="flex gap-3 items-center justify-end">{children}</div>;
};

export const PCLayoutFormContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={twMerge('h-full w-full', className)} {...props}>
      {children}
    </div>
  );
};

const Form = {
  Root: PCLayoutForm,
  Actions: PCLayoutFormActions,
  Content: PCLayoutFormContent,
};

export default Form;
