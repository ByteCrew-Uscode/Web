import { useFlow } from '@/app/stackflow';
import { post, REQUEST } from '@/shared/api';
import { PATH } from '@/shared/constants';
import type { Tool } from '@/shared/types';
import { useMutation } from '@tanstack/react-query';

const submitPhoto = async (data: FormData) => {
  const response = await post<FormData, Tool[]>({
    request: REQUEST.PHOTO_UPLOAD,
    data: data,
  });
  return response.data;
};

export const useSubmitPhoto = () => {
  const { replace } = useFlow();

  return useMutation({
    mutationFn: submitPhoto,
    onSuccess: data => {
      replace(PATH.PHOTO_RESULT, { result: data });
    },
  });
};
