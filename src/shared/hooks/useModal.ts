import { useAtomValue, useSetAtom } from 'jotai';

import { modalAtom, updateModal } from '../atom';
import type { ModalItem } from '../types';

export default function useModal() {
  const modal = useAtomValue(modalAtom);
  const setModal = useSetAtom(updateModal);

  const modalState = (key: ModalItem) => modal[key] || { isOpen: false };

  const openModal = (key: ModalItem) => {
    setModal({ key, isOpen: true });
  };

  const closeModal = (key: ModalItem) => {
    setModal({ key, isOpen: false });
  };

  return {
    modalState,
    openModal,
    closeModal,
  };
}
