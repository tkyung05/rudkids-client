import { DefaultApiResponseType } from './api';
import { ItemStatusType } from './item';

export type OptionGroupsType = {
  name: string;
  option: {
    name: string;
    price: number;
  };
}[];

export interface CartAddItemRequestType {
  itemName: string;
  amount: number;
  optionGroups: OptionGroupsType;
}

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  amount: number;
  imageUrl: string;
  itemStatus: ItemStatusType;
};

export interface GetCartListResonseType extends DefaultApiResponseType {
  data: CartItemType[];
}

export interface CartItemPatchQuantityRequestType {
  cartItemId: string;
  amount: number;
  setNumber: number;
}

export type SelectedCartItemListType = {
  name: string;
  amount: number;
}[];

export interface GetSelectedCartItemListResponseType extends DefaultApiResponseType {
  data: SelectedCartItemListType;
}
