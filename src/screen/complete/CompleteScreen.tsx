import { AppScreen } from '@stackflow/plugin-basic-ui';
import { Dock } from '@/shared/ui';
import { PhoneCompleteImage } from '@/assets/images';
import Button from '@/shared/ui/Button';
import { useFlow } from '@/app/stackflow';

export default function PhoneCompleteScreen() {
  const { pop } = useFlow();

  return (
    <>
      <AppScreen>
        <div className="grid size-full place-items-center">
          <div className="flex flex-col items-center">
            <img src={PhoneCompleteImage} className="mb-8 size-50" />
            <p className="mb-3 text-2xl font-medium">신청이 완료되었습니다</p>
            <p className="mb-[135px] text-center leading-[30px]">
              AI가 계약서를 자동으로 작성하였으며 <br />
              <b>예약 현황</b>에서 언제든지 확인하실 수 있습니다
            </p>
            <Button size="lg" className="w-[310px]" onClick={() => pop()}>
              홈으로 돌아가기
            </Button>
          </div>
        </div>
      </AppScreen>
      <Dock />
    </>
  );
}
