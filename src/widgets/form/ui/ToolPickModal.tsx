import { CloseIcon, SearchColoredIcon, SearchIcon } from '@/assets/icons';
import { MODAL } from '@/shared/constants';
import { useModal } from '@/shared/hooks';
import { Button, Modal, ToolButton } from '@/shared/ui';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useFetchLocation, useFetchToolsByLocation } from '../api';
import { cn } from '@/shared/utils';

interface ToolPickModalProps {
  selectedTool: string;
  setSelectedTool: Dispatch<SetStateAction<string>>;
  setSelectedLocationName: Dispatch<SetStateAction<string>>;
  setSelectedPrice: Dispatch<SetStateAction<number>>;
}

export default function ToolPickModal({
  selectedTool,
  setSelectedTool,
  setSelectedLocationName,
  setSelectedPrice,
}: ToolPickModalProps) {
  const { modalState, closeModal } = useModal();
  const { isOpen } = modalState(MODAL.TOOL_PICK);
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(1);

  const { data: location } = useFetchLocation();
  const { data: tools } = useFetchToolsByLocation(selectedLocation);

  const renderButton = () => {
    if (location) {
      return location.map(({ id, locationName }) => (
        <button
          className={cn(
            'border-m rounded-md border-[1px] px-2 py-1 outline-none',
            selectedLocation === id && 'border-m bg-m text-white',
          )}
          key={id}
          onClick={() => {
            setSelectedLocation(id);
            setSelectedLocationName(locationName);
          }}
        >
          {locationName}
        </button>
      ));
    }
    return <></>;
  };

  const renderTools = () => {
    if (tools) {
      const filteredTools = search.trim()
        ? tools.filter(
            ({ tool, description }) =>
              tool.toLowerCase().includes(search.toLowerCase()) ||
              description.toLowerCase().includes(search.toLowerCase()),
          )
        : tools;

      if (filteredTools.length === 0) {
        return (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-gray-500">검색 결과가 없습니다.</p>
          </div>
        );
      }

      return filteredTools.map(
        ({ tool, quantity, description, image, price }) => (
          <ToolButton
            key={tool}
            toolType={tool}
            quantity={quantity}
            description={description}
            image={image}
            selected={selectedTool === tool}
            onClick={() => {
              if (selectedTool === tool) {
                setSelectedTool('');
                setSelectedPrice(0);
              } else {
                setSelectedTool(tool);
                setSelectedPrice(price);
              }
            }}
          />
        ),
      );
    }
  };

  return (
    <>
      {isOpen && (
        <Modal
          modalKey={MODAL.TOOL_PICK}
          className="relative min-h-[660px] w-[340px]"
        >
          <p className="mb-9 text-center text-xl">농기계 검색 창</p>
          <button
            onClick={() => closeModal(MODAL.TOOL_PICK)}
            className="right-normal top-normal absolute cursor-pointer outline-none"
          >
            <img src={CloseIcon} />
          </button>
          <div className="relative mb-9 flex w-full justify-center">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="focus:border-m w-[244px] rounded-md border-[1px] border-[#e1e1e1] bg-white px-[15px] py-[12px] focus:outline-none"
            />
            <img
              className="absolute top-1/2 right-10 size-6 -translate-y-1/2"
              src={search ? SearchColoredIcon : SearchIcon}
            />
          </div>
          <div className="mb-3 flex justify-center gap-x-2">
            {renderButton()}
          </div>
          <div className="scrollbar-hide flex h-90 flex-col gap-y-2.5 overflow-y-scroll">
            {renderTools()}
          </div>
          <Button
            type="button"
            size="lg"
            intent={selectedTool.length > 0 ? 'primary' : 'disabled'}
            disabled={selectedTool.length === 0}
            onClick={() => closeModal(MODAL.TOOL_PICK)}
          >
            선택 완료
          </Button>
        </Modal>
      )}
    </>
  );
}
