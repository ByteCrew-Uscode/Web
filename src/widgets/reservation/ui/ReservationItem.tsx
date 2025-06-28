import type { Reservation } from '@/shared/types';

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => (
  <div className="grid w-full grid-cols-[1fr_3fr]">
    <p>{label}</p>
    <p className="text-sd">{value}</p>
  </div>
);

export default function ReservationItem({
  id,
  image,
  tool,
  description,
  startDate,
  endDate,
  location,
}: Reservation) {
  const infoItems = [
    { label: '신청 일자', value: startDate },
    { label: '반납 일자', value: endDate },
    { label: '대여소', value: location },
    { label: '예약 현황', value: status || '진행중' },
  ];

  return (
    <div
      key={id}
      className="shadow-homeBox relative h-[323px] w-full flex-shrink-0 rounded-md bg-white p-[18px]"
    >
      <div className="mb-5 flex w-full items-center gap-6">
        <img
          src={
            'https://usfarmtools.com' + image || 'https://placehold.co/68x68'
          }
          className="size-[68px] rounded-md object-cover object-center"
        />
        <div className="flex w-50 flex-col items-start overflow-x-hidden">
          <p className="text-lg font-semibold">{tool}</p>
          <p className="text-sd text-sm text-nowrap text-ellipsis">
            {description || ''}
          </p>
        </div>
      </div>
      <hr className="border-sl mb-5 w-full border-[1px]" />
      <div className="flex w-full flex-col gap-4 font-normal">
        {infoItems.map(({ label, value }) => (
          <InfoRow key={label} label={label} value={value} />
        ))}
      </div>
      <button className="border-sd text-sd absolute right-[18px] bottom-[18px] cursor-pointer rounded-md border-[1px] px-3 py-1.5 outline-none">
        계약서 보기
      </button>
    </div>
  );
}
