import { get, REQUEST } from '@/shared/api';
import type { Reservation } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

const fetchReservation = async () => {
  const response = await get<Reservation[]>({
    request: REQUEST.RESERVATION_SEARCH,
  });
  return response.data;
};

export const useFetchReservation = () => {
  return useQuery({ queryKey: ['reservation'], queryFn: fetchReservation });
};
