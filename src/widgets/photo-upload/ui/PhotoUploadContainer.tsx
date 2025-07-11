import { CameraIcon } from '@/assets/icons';
import { useImageUpload } from '@/shared/hooks';
import { Button } from '@/shared/ui';
import { base64ToFile } from '@/shared/utils';
import { useFlow } from '@/app/stackflow';
import { PATH } from '@/shared/constants';

export default function PhotoUploadContainer() {
  const { handleImageInputChange, image } = useImageUpload(true);
  const { replace } = useFlow();

  const handleSubmitPhoto = () => {
    if (image) {
      const file = base64ToFile(image);
      const formData = new FormData();
      formData.append('image', file);
      replace(PATH.PHOTO_LOADING, { data: formData });
    }
  };

  return (
    <div className="p-normal size-full">
      <p className="text-2xl font-semibold">피해 현장 사진을 올려주세요</p>
      <p className="mb-[55px]">
        AI가 사진을 보고 필요한 농기계를 추천해 드립니다
      </p>
      <label htmlFor="file">
        <input
          id="file"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageInputChange}
        />
        <div
          className="bg-m-transparent border-sl grid h-[388px] w-[350px] place-items-center rounded-md border-[1px] border-dashed bg-cover bg-center"
          style={{ backgroundImage: `url(${image ?? ''})` }}
        >
          {!image && (
            <div className="flex flex-col items-center gap-y-3">
              <img src={CameraIcon} className="size-[55px]" />
            </div>
          )}
        </div>
      </label>
      <div className="mt-15 flex w-full justify-center">
        <Button
          disabled={!image}
          intent={image ? 'primary' : 'disabled'}
          size="lg"
          className="w-[310px]"
          onClick={handleSubmitPhoto}
        >
          AI가 추천해주는 농기계 보기
        </Button>
      </div>
    </div>
  );
}
