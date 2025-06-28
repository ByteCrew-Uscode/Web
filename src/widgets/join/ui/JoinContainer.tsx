import { CameraIcon, Logo } from '@/assets/icons';
import { useImageUpload } from '@/shared/hooks';

export default function JoinContainer() {
  const { handleImageInputChange, image, isPending } = useImageUpload();

  return (
    <div className="p-normal grid h-screen w-full place-items-center">
      <div className="flex w-full flex-col items-center">
        <img src={Logo} className="size-[112px]" />
        <p className="text-m mb-1 text-3xl font-bold">농기구 임대 서비스</p>
        <p className="mb-8 text-xl">
          주민등록증만 있으면 바로 시작할 수 있어요
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
            className="bg-m-transparent border-sl grid h-[207px] w-[350px] place-items-center rounded-md border-[1px] border-dashed bg-cover bg-center"
            style={{ backgroundImage: `url(${image ?? ''})` }}
          >
            {!image && (
              <div className="flex flex-col items-center gap-y-3">
                <img src={CameraIcon} className="size-[55px]" />
                <button className="bg-m cursor-pointer rounded-full px-6 py-2 text-sm font-semibold text-white focus:outline-none">
                  주민등록증 사진 추가하기
                </button>
              </div>
            )}
          </div>
        </label>
        {isPending && <div className="mt-4">사진 확인 완료! 가입중..</div>}
      </div>
    </div>
  );
}
