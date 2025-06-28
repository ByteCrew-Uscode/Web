import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BackgroundImage } from '@/assets/images';
import { BasicAppBar } from '@/shared/ui';
import {
  CameraSolidIcon,
  EditIcon,
  PhoneIcon,
  TractorBlackIcon,
} from '@/assets/icons';
import Dock from '@/shared/ui/Dock';

export default function HomeScreen() {
  return (
    <>
      <AppScreen
        preventSwipeBack
        backgroundImage={`url(${BackgroundImage})`}
        appBar={BasicAppBar}
      >
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
      </AppScreen>
      <Dock />
    </>
  );
}

const HomeButton = ({
  icon,
  label,
  description,
  buttonLabel,
  onClick = () => {},
  isAtag = false,
}: {
  icon: string;
  label: string;
  description: string;
  buttonLabel: string;
  onClick?: () => void;
  isAtag?: boolean;
}) => {
  return (
    <div className="shadow-homeBox py-normal w-full rounded-md bg-white px-[17px]">
      <p className="mb-2 text-xl font-bold">{label}</p>
      {description.split('<br/>').map((line, index) => (
        <p className="text-s text-sm" key={index}>
          {line}
        </p>
      ))}
      {isAtag ? (
        <a
          href="tel:13239911974"
          className="border-m text-m hover:bg-m-hover active:bg-m-hover mt-[26px] flex w-full cursor-pointer items-center justify-center rounded-full border-[1px] py-3 font-semibold focus:outline-none"
        >
          <img src={icon} className="mr-2" />
          <span>{buttonLabel}</span>
        </a>
      ) : (
        <button
          onClick={onClick}
          className="border-m text-m hover:bg-m-hover active:bg-m-hover mt-[26px] flex w-full cursor-pointer items-center justify-center rounded-full border-[1px] py-3 font-semibold focus:outline-none"
        >
          <img src={icon} className="mr-2" />
          <span>{buttonLabel}</span>
        </button>
      )}
    </div>
  );
};
