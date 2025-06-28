import { MODAL } from '@/shared/constants';

export type ModalItem = (typeof MODAL)[keyof typeof MODAL];
