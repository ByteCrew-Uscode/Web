import { atom } from 'jotai';

import type { ModalItem } from '@/shared/types';
import { MODAL } from '@/shared/constants';

type ModalInfo = {
  [key in ModalItem]: { isOpen: boolean };
};

const modals = Object.fromEntries(
  Object.keys(MODAL).map(key => [key, { isOpen: false }]),
) as ModalInfo;

export const modalAtom = atom<ModalInfo>(modals);

export const updateModal = atom(
  null,
  (get, set, update: { key: ModalItem; isOpen: boolean }) => {
    const currentModal = get(modalAtom);
    const updatedModal = {
      ...currentModal,
      [update.key]: { isOpen: update.isOpen },
    };
    set(modalAtom, updatedModal);
  },
);
