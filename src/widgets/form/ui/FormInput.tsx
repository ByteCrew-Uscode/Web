import { SearchIcon } from '@/assets/icons';
import type { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isSearch?: boolean;
  onClick?: () => void;
}

export default function FormInput({
  isSearch,
  onClick = () => {},
  ...rest
}: FormInputProps) {
  const renderInput = () => {
    if (isSearch) {
      return (
        <button
          onClick={onClick}
          className="focus:border-m relative h-[50px] w-[244px] cursor-pointer rounded-md border-[1px] border-[#e1e1e1] bg-white focus:outline-none"
        >
          <img
            className="absolute top-1/2 right-3 size-6 -translate-y-1/2"
            src={SearchIcon}
          />
        </button>
      );
    } else {
      return (
        <input
          className="focus:border-m w-[244px] rounded-md border-[1px] border-[#e1e1e1] bg-white px-[15px] py-[12px] focus:outline-none"
          {...rest}
        />
      );
    }
  };
  return renderInput();
}
