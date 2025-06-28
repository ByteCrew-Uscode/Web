import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';

import type { User } from '@/shared/types';
import { useModal } from '@/shared/hooks';
import { Button } from '@/shared/ui';
import { MODAL } from '@/shared/constants';
import { fetchSessionData } from '@/shared/utils';

import type { PostReservation } from '../types';
import { useSubmitReservation } from '../api';

interface FormContainerProps {
  selectedPrice: number;
  selectedTool: string;
  selectedLocation: string;
}

export default function FormContainer({
  selectedPrice,
  selectedTool,
  selectedLocation,
}: FormContainerProps) {
  const { name } = fetchSessionData('userInfo')! as User;
  const { mutate } = useSubmitReservation();
  const { openModal } = useModal();
  const { watch, handleSubmit, setValue } = useForm<PostReservation>({
    defaultValues: {
      tool: selectedTool,
      location: selectedLocation,
      userName: name,
    },
  });

  useEffect(() => {
    setValue('tool', selectedTool);
  }, [selectedTool, setValue]);

  useEffect(() => {
    if (selectedTool && !selectedLocation) {
      setValue('location', '의성본소');
    } else setValue('location', selectedLocation);
  }, [selectedLocation, setValue, selectedTool]);

  const isFormValid =
    selectedTool && selectedLocation && watch('startDate') && watch('endDate');

  const formItems = [
    {
      label: '농기계',
      type: 'search',
      name: 'tool' as const,
      value: selectedTool,
      onClick: () => openModal(MODAL.TOOL_PICK),
    },
    {
      label: '대여소',
      type: 'text',
      name: 'location' as const,
      value: selectedLocation,
    },
    {
      label: '대여일자',
      type: 'date',
      name: 'startDate' as const,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue('startDate', e.target.value),
    },
    {
      label: '반납일자',
      type: 'date',
      name: 'endDate' as const,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue('endDate', e.target.value),
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(data => mutate(data))}
      className="p-normal flex size-full flex-col items-center gap-y-10 overflow-x-hidden pt-[30px]"
    >
      {formItems.map(item => (
        <FormItem
          key={item.label}
          {...item}
          value={item.value || watch(item.name)}
          onClick={item.onClick || undefined}
        />
      ))}

      <div className="flex w-full items-center justify-between">
        <span className="text-s ml-3.5 flex items-start justify-end text-xl">
          임대요금
        </span>
        <span className="text-s text-xl">{selectedPrice}원</span>
      </div>
      <div className="flex w-full justify-center">
        <Button
          size="lg"
          intent={isFormValid ? 'primary' : 'disabled'}
          className="w-[310px]"
          type="submit"
        >
          대여 신청 완료하기
        </Button>
      </div>
    </form>
  );
}

const FormItem = ({
  label,
  type,
  onClick,
  value,
  onChange,
}: {
  label: string;
  type: string;
  onClick?: () => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="grid grid-cols-[1fr_3fr] gap-4">
    <span className="text-s flex w-full items-center justify-end text-xl">
      {label}
    </span>
    {type === 'search' ? (
      <FormInput isSearch onClick={onClick} value={value} />
    ) : (
      <FormInput type={type} value={value} onChange={onChange} />
    )}
  </div>
);
