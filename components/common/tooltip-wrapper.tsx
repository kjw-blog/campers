import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface TooltipWrapperProps {
  children: React.ReactNode;
  label: string;
  side?: 'right' | 'top' | 'bottom';
}

export const TooltipWrapper = ({
  children,
  label,
  side = 'right',
}: TooltipWrapperProps) => {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align="center">
          <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-300">
            {label}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
