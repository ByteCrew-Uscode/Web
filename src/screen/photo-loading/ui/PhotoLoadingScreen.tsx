import { LoadingBackground } from '@/assets/images';
import { Loader } from '@/shared/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';

export default function PhotoUploadScreen() {
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
}
