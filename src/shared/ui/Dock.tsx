import { useStack } from '@stackflow/react';

import { useFlow } from '@/app/stackflow';

import { DOCK, DOCK_ITEMS, PATH } from '@/shared/constants';
import type { DockItem, PathItem } from '../types';
import { cn } from '../utils';

interface DockProps {
  isLoading?: boolean;
}

interface DockButtonProps {
  item: DockItem;
  selected: boolean;
}

export default function Dock(isLoading: DockProps) {
  const stack = useStack();
  const info = stack.activities;
  const current = info
    .filter(i => i.transitionState === 'enter-done')
    .map(i => i.name)
    .pop() as PathItem;

  const render =
    current !== PATH.COMPLETE &&
    current !== PATH.PHOTO_UPLOAD &&
    current !== PATH.FORM;

  return (
    <>
      {render && (
        <div
          className={cn(
            'dock shadow-dock container-mobile border-t-sxl h-dock-height fixed right-0 bottom-0 left-0 z-60 flex items-center justify-between border-[1px] border-none',
            isLoading ? 'translate-y-0' : 'translate-y-full',
          )}
        >
          {DOCK_ITEMS.map(item => (
            <DockButton key={item} item={item} selected={current === item} />
          ))}
        </div>
      )}
    </>
  );
}

const DockButton = ({ item, selected }: DockButtonProps) => {
  const { replace } = useFlow();

  const onClick = () => {
    replace(item, { animate: false }, { animate: false });
  };

  return (
    <div className="flex size-20 flex-col gap-1.5" onClick={onClick}>
      {selected ? DOCK[item].selectedIcon : DOCK[item].icon}
      <p className={cn(selected ? 'text-m' : 'text-[#d8d8d8]')}>
        {DOCK[item].title}
      </p>
    </div>
  );
};
