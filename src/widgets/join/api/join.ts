import { useFlow } from '@/app/stackflow';
import { post, REQUEST } from '@/shared/api';
import { PATH } from '@/shared/constants';
import { useMutation } from '@tanstack/react-query';
import type { Dispatch, SetStateAction } from 'react';

const submitIdCard = async (data: FormData) => {
  const response = await post({
    request: REQUEST.JOIN,
    data: data,
  });
  return response.data;
};

export const useSubmitIdCard = (
  setSelectedImage: Dispatch<SetStateAction<string | null>>,
) => {
  const { replace } = useFlow();

  return useMutation({
    mutationFn: submitIdCard,
    onSuccess: () => {
      replace(PATH.HOME, {});
    },
    onError: () => {
      alert('회원가입에 실패했어요. 다시 시도해 주세요');
      setSelectedImage(null);
    },
  });
};
