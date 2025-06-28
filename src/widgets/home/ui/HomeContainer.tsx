import { useFlow } from '@/app/stackflow';
import { HomeButton } from './HomeButton';
import {
  CameraSolidIcon,
  EditIcon,
  PhoneIcon,
  TractorBlackIcon,
} from '@/assets/icons';
import { PATH } from '@/shared/constants';

export default function HomeContainer() {
  const { push } = useFlow();

  return (
    <div className="scrollbar-hide p-normal flex size-full flex-col overflow-scroll">
      <div className="mt-[134px] mb-2 flex items-center gap-x-1 text-3xl font-bold">
        <img src={TractorBlackIcon} />
        농기구 대여 서비스
      </div>
      <div className="pb-dock-height flex w-full flex-col gap-y-5">
        <HomeButton
          icon={PhoneIcon}
          label="말로 신청하기"
          description="전화가 연결되면, 그냥 평소처럼 이야기하듯 말해주세요.<br/>AI가 알아듣고 필요한 농기계 신청을 도와줍니다."
          buttonLabel="말로 신청하기"
          isAtag
          onClick={() => {
            push(PATH.PHONE_COMPLETE, {});
          }}
        />
        <HomeButton
          icon={CameraSolidIcon}
          label="사진으로 신청하기"
          description="피해 현장 사진을 찍어 올리면<br/>AI가 현장을 파악하고 지원을 도와줍니다."
          buttonLabel="사진 업로드"
        />
        <HomeButton
          icon={EditIcon}
          label="직접 입력해서 신청하기"
          description="AI 추천이 아닌 내가 원하는 방식대로<br/>농기계 대여소 날짜를 직접 선택해 신청하세요."
          buttonLabel="직접 입력하기"
        />
      </div>
    </div>
  );
}
