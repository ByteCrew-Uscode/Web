import { useFetchReservation } from '../api';
import ReservationItem from './ReservationItem';

export default function ReservationContainer() {
  const { data, isError } = useFetchReservation();

  const renderReservation = () => {
    if (isError)
      return (
        <div className="p-normal flex h-full items-center justify-center">
          <p className="text-sd">데이터를 불러오던 중 오류가 발생했어요.</p>
        </div>
      );
    if (!data)
      return (
        <div className="p-normal flex h-full items-center justify-center">
          <p className="text-sd">데이터를 가져오는 중...</p>
        </div>
      );

    if (data.length === 0) {
      return (
        <div className="p-normal flex h-full items-center justify-center">
          <p className="text-sd">예약 내역이 없습니다.</p>
        </div>
      );
    }

    return (
      <div className="p-normal scrollbar-hide pb-dock-height gap-y-normal flex flex-col overflow-y-scroll">
        {data.map(reservation => (
          <ReservationItem key={reservation.id} {...reservation} />
        ))}
      </div>
    );
  };

  return (
    <div className="scrollbar-hide flex size-full flex-col">
      {renderReservation()}
    </div>
  );
}
