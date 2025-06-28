import { Button } from '@/shared/ui';
import FormInput from './FormInput';

export default function FormContainer() {
  const formItems = [
    { label: '농기계', type: 'search', onClick: () => {} },
    { label: '대여소', type: 'text' },
    { label: '대여일자', type: 'date' },
    { label: '반납일자', type: 'date' },
  ];

  return (
    <div className="p-normal flex size-full flex-col items-center gap-y-10 overflow-x-hidden pt-[30px]">
      {formItems.map(item => (
        <FormItem
          key={item.label}
          {...item}
          onClick={item.onClick || undefined}
        />
      ))}

      <div className="flex w-full flex-col pl-3 font-light">
        <hr className="mt-[50px] mb-[10px] w-full border-[#e1e1e1] font-light" />
        <p>계약서는 AI가 자동으로 작성해줍니다</p>
        <p className="mb-2.5 text-[#919090]">· 예약 현황에서 확인 가능</p>
        <p className="mb-[85px]">임대영업소 운영 시간: 평일 09:00 ~ 18:00</p>
        <div className="flex w-full justify-center">
          <Button size="lg" className="w-[310px]">
            대여 신청 완료하기
          </Button>
        </div>
      </div>
    </div>
  );
}

const FormItem = ({
  label,
  type,
}: {
  label: string;
  type: string;
  onClick?: () => void;
}) => (
  <div className="grid grid-cols-[1fr_3fr] gap-4">
    <span className="text-s flex w-full items-center justify-end text-xl">
      {label}
    </span>
    {type === 'search' ? <FormInput isSearch /> : <FormInput type={type} />}
  </div>
);
