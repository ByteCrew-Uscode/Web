import { CheckIcon, UnCheckedIcon } from '@/assets/icons';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils';

interface ToolButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  image: string;
  toolType: string;
  description: string;
  selected: boolean;
  quantity?: number;
}

export default function ToolButton({
  image,
  toolType,
  description,
  selected,
  quantity,
  ...rest
}: ToolButtonProps) {
  return (
    <button
      className={cn(
        selected ? 'border-m bg-m/15' : 'border-sxl bg-white',
        'shadow-homeBox flex w-full cursor-pointer items-center gap-x-6 rounded-md border-[1px] px-3 py-[14px] outline-none',
      )}
      {...rest}
    >
      <img
        src={'https://usfarmtools.com' + image || 'https://placehold.co/68x68'}
        className="size-[68px] object-cover object-center"
      />
      <div className="flex w-50 flex-col items-start overflow-x-hidden">
        <p className="text-lg font-semibold">{toolType}</p>
        <p className="text-sd text-sm text-nowrap text-ellipsis">
          {quantity ? `${quantity}` : description}
        </p>
      </div>
      <img src={selected ? CheckIcon : UnCheckedIcon} className="size-10" />
    </button>
  );
}
