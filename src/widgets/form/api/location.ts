import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import type { Location } from '../types';

const fetchLocation = async () => {
  const response = await get<Location[]>({ request: REQUEST.LOCATION });
  return response.data;
};

export const useFetchLocation = () => {
  return useQuery({
    queryKey: ['location'],
    queryFn: fetchLocation,
  });
};
