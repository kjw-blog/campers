import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  type: 'text' | 'password';
  placeholder: string;
  warning?: string;
  register?: UseFormRegisterReturn;
}

const Input = (
  { label, type, placeholder, warning, register }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  return (
    <div className="relative w-full rounded-sm border border-zinc-300">
      <input
        type={type}
        required
        className="peer w-full rounded-sm px-[10px] py-4 text-sm text-zinc-500 outline-none focus:placeholder:opacity-0"
        placeholder={placeholder}
        {...register}
      />
      <label className="absolute left-[10px] top-4 bg-white px-1 text-sm text-zinc-500 opacity-0 transition peer-valid:-translate-y-[26px] peer-valid:text-camp-heavy peer-valid:opacity-100 peer-focus:-translate-y-[26px] peer-focus:text-camp-heavy peer-focus:opacity-100">
        {label}
      </label>
      <p className="absolute -bottom-6 text-xs font-bold text-rose-600">
        {warning}
      </p>
    </div>
  );
};

export default React.forwardRef(Input);
