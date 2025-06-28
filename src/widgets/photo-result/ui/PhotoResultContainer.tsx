import { useFlow } from '@/app/stackflow';
import { PATH } from '@/shared/constants';
import type { Tool } from '@/shared/types';
import { Button, ToolButton } from '@/shared/ui';
import { useState } from 'react';

export default function PhotoResultContainer({ tools }: { tools: Tool[] }) {
  const { replace } = useFlow();
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <div className="size-full">
      <div className="p-normal mb-10 flex w-full flex-col">
        <p className="text-2xl font-semibold">
          상황에 맞는 농기계를 골라봤어요
        </p>
        <p>필요한 장비를 선택해 예약을 진행해 주세요</p>
      </div>
      <div className="p-normal scrollbar-hide flex h-100 w-full flex-col gap-y-3 overflow-y-scroll">
        {tools.map(({ id, image, toolType, description }) => (
          <ToolButton
            key={id}
            image={image}
            toolType={toolType}
            description={description}
            selected={selected.includes(id)}
            onClick={() =>
              setSelected(prev =>
                prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id],
              )
            }
          />
        ))}
      </div>
      <div className="px-normal mt-10 flex w-full justify-center">
        <Button
          intent={selected.length > 0 ? 'primary' : 'disabled'}
          size="lg"
          className="w-[310px]"
          onClick={() => {
            if (selected.length > 0) replace(PATH.COMPLETE, {});
          }}
        >
          예약하기
        </Button>
      </div>
    </div>
  );
}
