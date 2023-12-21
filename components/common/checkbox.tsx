import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface CheckboxProps {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ className, onChange }: CheckboxProps) => {
  return (
    <label
      className={cn(
        'flex h-4 w-4 cursor-pointer items-center justify-center overflow-hidden rounded-sm border-[1px] border-zinc-600 dark:border-zinc-400',
        className,
      )}
    >
      <input onChange={onChange} type="checkbox" className="peer hidden" />
      <div className="flex h-4 w-4 items-center justify-center transition peer-checked:bg-camp-heavy peer-checked:[&>*]:scale-100">
        <Check className="h-3 w-3 scale-0 stroke-white stroke-[3px] transition duration-300 peer-checked:scale-100" />
      </div>
    </label>
  );
};
