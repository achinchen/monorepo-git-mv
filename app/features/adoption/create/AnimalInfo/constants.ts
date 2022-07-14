import type { Family } from '@prisma/client';
import { FAMILY, GENDER, SIZE, COLOR } from '~/constants/options';
import { DEFAULT_GENDER_VALUE } from '~/features/adoption/create/constants'

export const DEFAULT_GENDER_OPTION = {
  VALUE: DEFAULT_GENDER_VALUE,
  LABEL: () => '不明'
};

export const FAMILY_OPTION = {
  CATEGORY: FAMILY.CATEGORY,
  OPTIONS: FAMILY.OPTIONS,
  LABEL: '種類'
};

export const GENDER_OPTION = {
  CATEGORY: GENDER.CATEGORY,
  OPTIONS: [...GENDER.OPTIONS, DEFAULT_GENDER_OPTION],
  LABEL: '性別'
};

export const SIZE_OPTION = {
  ...SIZE,
  LABEL: '體型'
};

export const NAME_OPTION = {
  LABEL: '牠的名字',
  PLACEHOLDER: ' 若尚未取名可不填'
};

export const COLOR_OPTION = {
  LABEL: '毛色',
  OPTION: (family: Family) => COLOR.OPTION[family]
};
