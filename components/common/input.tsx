import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  type?: 'text' | 'password' | 'email';
  placeholder: string;
  warning?: string;
  register?: UseFormRegisterReturn;
}

const Input = (
  { label, type = 'text', placeholder, warning, register }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  return (
    <div className="relative w-full rounded-sm border border-zinc-300">
      <input
        type={type}
        required
        className="peer w-full rounded-sm px-[10px] py-4 text-[10px] text-zinc-500 outline-none focus:placeholder:opacity-0 md:text-sm"
        placeholder={placeholder}
        autoComplete="off"
        {...register}
      />
      <label className="absolute left-[10px] top-4 rounded-md bg-white px-1  text-[10px] text-zinc-500 opacity-0 transition peer-valid:-translate-y-[26px] peer-valid:text-camp-heavy peer-valid:opacity-100 peer-focus:-translate-y-[26px] peer-focus:text-camp-heavy peer-focus:opacity-100 dark:bg-dark-400 dark:peer-valid:text-white dark:peer-focus:text-white md:text-sm">
        {label}
      </label>
      <p className="absolute -bottom-6 text-xs font-bold text-rose-600">
        {warning}
      </p>
    </div>
  );
};

export default React.forwardRef(Input);
