import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../../hooks/useTheme';
import { PCLayoutInputProps } from '../../../types/types';

export const Input = ({
  label,
  error,
  containerClassName,
  customInput,
  ...props
}: PCLayoutInputProps) => {
  const scheme = useTheme();

  return (
    <div className={twMerge('w-full', containerClassName)}>
      {label && (
        <label
          className="block uppercase tracking-wide text-xs font-bold"
          style={{
            color: !error ? scheme?.textPrimary : scheme?.error,
            transition: 'color 0.3s ease-in-out',
          }}
          htmlFor={props.name}
        >
          {label}
        </label>
      )}
      {customInput &&
        customInput({
          label,
          error,
          ...props,
          className: twMerge(
            'appearance-none block w-full border rounded h-10 px-1 leading-tight focus:outline-none',
            `placeholder:${scheme?.inputPrimaryPlaceholder}`,
            props.className
          ),
          style: {
            transition: 'all 0.3s ease-in-out',
            backgroundColor: scheme?.inputPrimaryBackground,
            color: scheme?.inputPrimaryText,
            border: `1px solid ${scheme?.inputPrimaryBorder}`,
            ...props.style,
          },
        })}
      {!customInput && (
        <>
          <div
            className={twMerge(
              'w-full h-10 border rounded-md leading-tight flex-row flex items-center gap-1 overflow-hidden',
              props.className
            )}
            style={{
              transition: 'all 0.3s ease-in-out',
              backgroundColor: scheme?.inputPrimaryBackground,
              color: scheme?.inputPrimaryText,
              border: !error
                ? `1px solid ${scheme?.inputPrimaryBorder}`
                : `1px solid ${scheme?.error}`,
              ...props.style,
            }}
          >
            {props.prefixElement && props.prefixElement()}
            <input
              {...props}
              name={props.name}
              id={props.name}
              className={twMerge(
                'appearance-none block w-full px-1 h-full focus:outline-none h-full leading-tight',
                `placeholder:${scheme?.inputPrimaryPlaceholder}`
              )}
              style={{
                minWidth: '95%',
              }}
            />
            {props.suffixElement && props.suffixElement()}
          </div>
          {error && (
            <p
              className="text-xs italic"
              style={{
                color: scheme?.error,
                transition: 'color 0.3s ease-in-out',
              }}
            >
              {error}
            </p>
          )}
        </>
      )}
    </div>
  );
};
