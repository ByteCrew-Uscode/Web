import type { DockItem } from '@/shared/types';
import { PATH } from './path';
import {
  HomeIcon,
  HomeSelectedIcon,
  // ReservationIcon,
  // ReservationSelectedIcon,
  // UserIcon,
  // UserSelectedIcon,
} from '@/assets/icons';

export const DOCK = {
  // ['']: {
  //   title: '예약 현황',
  //   icon: <img src={ReservationIcon} className="size-[30px]" />,
  //   selectedIcon: <img src={ReservationSelectedIcon} className="size-[30px]" />,
  // },
  [PATH.HOME]: {
    title: '홈',
    icon: <img src={HomeIcon} className="size-[30px]" />,
    selectedIcon: <img src={HomeSelectedIcon} className="size-[30px]" />,
  },
  // ['.']: {
  //   title: '나의 정보',
  //   icon: <img src={UserIcon} className="size-[30px]" />,
  //   selectedIcon: <img src={UserSelectedIcon} className="size-[30px]" />,
  // },
};

export const DOCK_ITEMS = Object.keys(DOCK) as Array<DockItem>;
