import React from 'react';
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';

export const Switcher = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) => {
  const handleCheckboxChange = () => {
    onChange(!value);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={value}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              value ? 'bg-slate-400' : 'bg-slate-300'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition text-slate-900 ${
              value ? 'translate-x-full' : ''
            }`}
          >
            {value ? (
              <HiLightBulb size={20} />
            ) : (
              <HiOutlineLightBulb size={20} />
            )}
          </div>
        </div>
      </label>
    </>
  );
};
