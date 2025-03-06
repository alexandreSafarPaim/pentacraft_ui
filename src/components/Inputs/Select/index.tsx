import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../../hooks/useTheme';
import { FormContext } from '../../../contexts/formContext';

interface IMultiselectProps {
  name: string;
  options: ISelectOption[];
  placeholder?: string;
  value?: string | string[];
  multiple?: boolean;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  error?: string;
  onChange?: (value: string | string[] | undefined) => void;
  defaultValue?: string | string[];
}

interface ISelectOption {
  value: string;
  label: string;
}

export const CustomSelect = ({
  name,
  options,
  placeholder,
  value,
  multiple,
  className,
  style,
  label,
  error,
  onChange,
  defaultValue,
}: IMultiselectProps) => {
  const scheme = useTheme();

  const [hasChangedByDefault, setHasChangedByDefault] = useState(false);

  const { formRef } = React.useContext(FormContext);

  const [selectedValues, setSelectedValues] = useState<any>([]);
  const [search, setSearch] = useState('');

  const refSelect = useRef<HTMLDivElement>(null);
  const refOptions = useRef<HTMLDivElement>(null);

  const handleOpenOptions = () => {
    if (refOptions.current) {
      refOptions.current.classList.toggle('hidden');
      refOptions.current.style.top = `${(refSelect.current?.offsetTop || 0) +
        (refSelect.current?.offsetHeight || 0) +
        4}px`;
      refOptions.current.style.left = `${refSelect.current?.offsetLeft || 0}px`;

      if (
        refOptions.current.offsetLeft + refOptions.current.offsetWidth >
        window.innerWidth
      ) {
        refOptions.current.style.left = `${(refSelect.current?.offsetLeft ||
          0) -
          (refOptions.current.offsetWidth -
            (refSelect.current?.offsetWidth || 0))}px`;
      }

      if (
        refOptions.current.offsetTop + refOptions.current.offsetHeight + 40 >
        window.innerHeight
      ) {
        refOptions.current.style.top = `${(refSelect.current?.offsetTop || 0) -
          refOptions.current.offsetHeight -
          4}px`;
      }
    }
  };

  const handleClickOutside = (e: any) => {
    if (
      refOptions.current &&
      !refOptions.current.contains(e.target as Node) &&
      refSelect.current &&
      !refSelect.current.contains(e.target as Node)
    ) {
      refOptions.current.classList.add('hidden');
    }
  };

  const resetForm = () => {
    // console.log('reset');
    setSelectedValues([]);
    onChange && onChange(undefined);
  };

  useEffect(() => {
    if (formRef) {
      formRef.current?.addEventListener('reset', resetForm);
    }

    return () => {
      formRef.current?.removeEventListener('reset', resetForm);
    };
  }, [formRef]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (value) {
      if (typeof value === 'string') {
        // console.log(value.split(','));
        setSelectedValues([value.split(',')]);
      } else {
        setSelectedValues(value);
      }
    } else {
      setSelectedValues([]);
    }
  }, [value]);

  useEffect(() => {
    console.log(hasChangedByDefault);
    if (hasChangedByDefault) return;
    if (defaultValue) {
      console.log(defaultValue);
      if (typeof defaultValue === 'string') {
        setSelectedValues([defaultValue.split(',')]);
      } else {
        setSelectedValues(defaultValue);
      }
      setHasChangedByDefault(true);
    }
  }, [defaultValue]);

  const valueText = useMemo(() => {
    if (selectedValues.length > 0 && selectedValues.length < 2) {
      return options.find(option => option.value == selectedValues[0])?.label;
    } else if (selectedValues.length > 1) {
      return `${selectedValues.length} selecionados`;
    } else {
      return placeholder || 'Selecione';
    }
  }, [selectedValues]);

  const handleSelect = (value: string) => {
    if (selectedValues.includes(value)) {
      if (!multiple) {
        setSelectedValues([]);
        onChange && onChange([]);
        refOptions.current?.classList.toggle('hidden');
      } else {
        setSelectedValues(selectedValues.filter((item: any) => item !== value));
        onChange &&
          onChange(selectedValues.filter((item: any) => item !== value));
      }
    } else {
      if (!multiple) {
        setSelectedValues([value]);
        onChange && onChange([value]);
        refOptions.current?.classList.toggle('hidden');
      } else {
        setSelectedValues([...selectedValues, value]);
        onChange && onChange([...selectedValues, value]);
      }
    }
  };

  return (
    <div className="w-full">
      {multiple ? (
        selectedValues.map((item: any) => (
          <input type="hidden" name={name.replace('[]', '') + "[]"} value={item} key={item} />
        ))
      ) : (
        <input
          type="hidden"
          name={name}
          value={selectedValues.length > 0 ? selectedValues[0] : ''}
        />
      )}
      {label && (
        <label
          className="block uppercase tracking-wide text-xs font-bold"
          style={{
            color: !error ? scheme?.textPrimary : scheme?.error,
            transition: 'color 0.3s ease-in-out',
          }}
        >
          {label}
        </label>
      )}
      <div
        ref={refSelect}
        onClick={handleOpenOptions}
        className={twMerge(
          'w-full h-10 border rounded-md leading-tight flex-row flex items-center gap-1 overflow-hidden pl-2 cursor-pointer',
          className
        )}
        style={{
          transition: 'all 0.3s ease-in-out',
          backgroundColor: scheme?.inputPrimaryBackground,
          color: scheme?.inputPrimaryText,
          border: !error
            ? `1px solid ${scheme?.inputPrimaryBorder}`
            : `1px solid ${scheme?.error}`,
          ...style,
        }}
      >
        <input
          type="text"
          value={valueText}
          className="w-full outline-none"
          readOnly
        />
        <RiArrowDownSLine size={24} />
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
      <div
        ref={refOptions}
        className="z-50 absolute overflow-hidden bg-white rounded-lg hidden border border-slate-400"
        style={{
          width: refSelect.current?.offsetWidth,
          boxShadow: '0px 0px 5px rgba(0,0,0,0.4)',
        }}
      >
        <div className="w-full flex items-center border-b border-slate-400">
          <BiSearchAlt className="ml-1" />
          <input
            type="text"
            className="w-full outline-none  py-1 px-1"
            placeholder="Pesquisar"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <ul className="flex flex-col gap-1 max-h-[200px] overflow-y-scroll">
          {options
            .filter(option =>
              option.label.toLowerCase().includes(search.toLowerCase())
            )
            .map(option => (
              <li key={option.value}>
                <button
                  type="button"
                  className={`w-full text-left p-2 overflow-hidden text-ellipsis whitespace-nowrap ${!multiple &&
                    selectedValues.includes(option.value) &&
                    'bg-slate-500 text-white'}`}
                  onClick={() => {
                    handleSelect(option.value);
                  }}

                  //   if (selectedValues.includes(option.value)) {
                  //     if (!multiple) {
                  //       setSelectedValues([]);
                  //       onChange && onChange([]);
                  //       refOptions.current?.classList.toggle('hidden');
                  //     } else {
                  //       setSelectedValues(
                  //         selectedValues.filter(
                  //           (item: any) => item !== option.value
                  //         )
                  //       );
                  //       onChange &&
                  //         onChange(
                  //           selectedValues.filter(
                  //             (item: any) => item !== option.value
                  //           )
                  //         );
                  //     }
                  //   } else {
                  //     if (!multiple) {
                  //       setSelectedValues([option.value]);
                  //       onChange && onChange([option.value]);
                  //       refOptions.current?.classList.toggle('hidden');
                  //     } else {
                  //       setSelectedValues([...selectedValues, option.value]);
                  //       onChange && onChange([...selectedValues, option.value]);
                  //     }
                  //   }
                  // }}
                >
                  {multiple && (
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={selectedValues.includes(option.value)}
                      onChange={() => {}}
                      className="mr-2"
                    />
                  )}
                  {option.label}
                </button>
              </li>
            ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            setSelectedValues([]);
            onChange && onChange(undefined);
          }}
          className="w-full bg-slate-300 font-bold border-t border-slate-400"
        >
          Limpar
        </button>
      </div>
    </div>
  );
};
