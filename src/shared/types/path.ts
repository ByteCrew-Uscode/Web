import { PATH } from '../constants';

type ValueOf<T> = T[keyof T];

export type PathItem = ValueOf<typeof PATH>;
