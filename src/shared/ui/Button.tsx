import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils';

interface ButtonsProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
}

const ButtonVariants = cva(
  'flex cursor-pointer items-center justify-center rounded-full py-3 font-semibold focus:outline-none',
  {
    variants: {
      intent: {
        home: 'border-m text-m hover:bg-m-hover active:bg-m-hover border-[1px]',
        primary: 'bg-m text-white',
        disabled: 'bg-[#D8D8D8] text-white',
      },
      size: {
        md: 'w-full py-3',
        lg: 'w-full py-5 text-xl',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  },
);

export default function Button({
  intent,
  size,
  children,
  className,
  ...props
}: ButtonsProps) {
  return (
    <button
      className={cn(ButtonVariants({ intent, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
