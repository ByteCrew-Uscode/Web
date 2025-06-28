import { LoadingBackground } from '@/assets/images';
import { Loader } from '@/shared/ui';
import { useSubmitPhoto } from '@/widgets/photo-upload/api';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import type { ActivityComponentType } from '@stackflow/react';
import { useEffect } from 'react';

const PhotoLoadingScreen: ActivityComponentType<{ data: FormData }> = ({
  params,
}: {
  params: { data: FormData };
}) => {
  const { mutate: submitPhoto } = useSubmitPhoto();

  useEffect(() => {
    submitPhoto(params.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppScreen backgroundImage={`url(${LoadingBackground})`}>
      <div className="grid h-screen w-full place-items-center">
        <div className="flex flex-col items-center">
          <Loader />
          <p className="text-s -mt-4 text-center text-xl font-semibold">
            AI가 사진을 분석하고 있어요...
          </p>
        </div>
      </div>
    </AppScreen>
  );
};

export default PhotoLoadingScreen;
