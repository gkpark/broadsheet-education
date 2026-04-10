import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-ink-light font-sans">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full rounded-none border border-paper-rule bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted font-sans focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
