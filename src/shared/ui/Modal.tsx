import { type ReactNode } from 'react';

import { cn } from '../utils';
import type { ModalItem } from '../types';

interface ModalProps {
  children: ReactNode;
  modalKey: ModalItem;
  coloredBg?: boolean;
  className?: string;
}

export default function Modal({
  children,
  modalKey,
  coloredBg = false,
  className,
}: ModalProps) {
  return (
    <>
      <div
        id={modalKey}
        className={cn(
          'fixed inset-0 z-30 flex items-center justify-center bg-black/12.5',
          coloredBg ? 'bg-black/12.5' : 'bg-transparent',
        )}
      >
        <div
          className={cn(
            'p-normal shadow-homeBox flex flex-col rounded-md bg-white',
            className,
            coloredBg ? 'box-shadow' : 'box-shadow-4',
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
}
