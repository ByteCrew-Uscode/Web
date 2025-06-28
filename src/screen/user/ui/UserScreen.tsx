import { AppScreen } from '@stackflow/plugin-basic-ui';
import { CenteredAppBar, Dock } from '@/shared/ui';
import { fetchSessionData, removeSessionData } from '@/shared/utils';
import type { User } from '@/shared/types';
import { CustomerIcon, LogoutIcon } from '@/assets/icons';

export default function UserScreen() {
  const { name, jumin } = fetchSessionData('userInfo') as User;
  return (
    <>
      <AppScreen
        preventSwipeBack
        appBar={CenteredAppBar('나의 정보')}
        backgroundColor="#F9F9F9"
      >
        <div className="p-normal flex size-full flex-col">
          <div className="shadow-homeBox p-normal mb-10 flex h-[166px] w-full items-center gap-x-5 rounded-md bg-white">
            <img
              src="https://imagescdn.gettyimagesbank.com/500/202001/jv11978931.jpg"
              className="size-[70px] rounded-full object-cover object-center"
            />
            <div className="flex flex-col gap-y-3 font-normal">
              <p className="text-xl">{name}</p>
              <p>
                {jumin.slice(0, 6)}-{jumin[7]}******
              </p>
            </div>
          </div>
          <div className="ml-[25px] flex flex-col gap-y-7">
            <button className="flex cursor-pointer gap-x-3 text-xl outline-none">
              <img src={CustomerIcon} />
              고객센터
            </button>
            <button
              className="flex cursor-pointer gap-x-3 text-xl outline-none"
              onClick={() => {
                removeSessionData('userInfo');
                window.location.href = '/';
              }}
            >
              <img src={LogoutIcon} />
              로그아웃
            </button>
          </div>
        </div>
      </AppScreen>
      <Dock />
    </>
  );
}
