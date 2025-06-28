import { post, REQUEST } from '@/shared/api';
import type { PostReservation } from '../types';
import { useMutation } from '@tanstack/react-query';
import { useFlow } from '@/app/stackflow';
import { PATH } from '@/shared/constants';

const submitReservation = async (data: PostReservation) => {
  const response = await post<PostReservation>({
    request: REQUEST.RESERVATION_SEARCH,
    data: data,
  });
  return response.data;
};

export const useSubmitReservation = () => {
  const { replace } = useFlow();
  return useMutation({
    mutationFn: submitReservation,
    onSuccess: () => replace(PATH.COMPLETE, {}),
  });
};
