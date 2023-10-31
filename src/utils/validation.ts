import { FormEvent } from 'react';

const getDefaultToQueryKeyText = (defaultText: string) => {
  const queryKeyText = defaultText.split(' ').join('$');
  return queryKeyText;
};

const getQueryKeyToDefaultText = (queryKeyText: string | null) => {
  if (!queryKeyText) return null;

  const defaultText = queryKeyText.split('$').join(' ');
  return defaultText;
};

const validOnlyNumber = (event: FormEvent<HTMLInputElement>) => {
  event.currentTarget.value = event.currentTarget.value.replace(/[^0-9]/g, '');
};

const parseToOriginalItemName = (cartItemName: string) => {
  return cartItemName.split(',')[0];
};

export {
  getDefaultToQueryKeyText,
  getQueryKeyToDefaultText,
  validOnlyNumber,
  parseToOriginalItemName,
};
