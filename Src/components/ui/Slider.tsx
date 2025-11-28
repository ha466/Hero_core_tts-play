import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showValue?: boolean;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, label, showValue = true, value, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            {showValue && <span className="text-sm text-gray-500">{value}</span>}
          </div>
        )}
        <input
          type="range"
          className={cn(
            'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
            'accent-primary-600',
            className
          )}
          ref={ref}
          value={value}
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';
