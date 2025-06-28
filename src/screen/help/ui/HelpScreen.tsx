import { InfoImage, InfoImage2 } from '@/assets/images';
import { CenteredAppBar } from '@/shared/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';

export default function HelpScreen() {
  return (
    <AppScreen appBar={CenteredAppBar('도움말')} backgroundColor="#Fff">
      <div className="p-normal flex size-full flex-col">
        <p className="ml-2 text-2xl font-semibold">임대사업소 운영 시간</p>
        <p className="mb-4 ml-2 text-xl text-[#f00]">
          09:00 ~ 18:00(일요일 및 공휴일 휴무)
        </p>
        <img src={InfoImage} alt="info" className="mb-4 size-fit" />
        <img src={InfoImage2} alt="info" className="size-fit" />
      </div>
    </AppScreen>
  );
}
