import { get } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import type { PickTool } from '../types';

const fetchToolsByLocation = async (locationId: number) => {
  const response = await get<PickTool[]>({
    request: `api/locations/${locationId}/tools`,
  });
  return response.data;
};

export const useFetchToolsByLocation = (locationId: number) => {
  return useQuery({
    queryKey: ['tools', locationId],
    queryFn: () => fetchToolsByLocation(locationId),
  });
};
