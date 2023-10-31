import { DefaultApiResponseType } from './api';
import { ImageType } from './image';

export type ItemStatusType = 'SELLING' | 'SOLD_OUT' | 'PREPARING';

export interface ItemType {
  itemId: string;
  name: string;
  price: number;
  imageUrl: string;
  itemStatus: ItemStatusType;
}

export type ItemOptionGroupResponseListType = {
  itemOptionGroupName: string;
  itemOptionInfoList: {
    itemOptionName: string;
    itemOptionPrice: number;
  }[];
}[];

export interface ItemDetailType {
  enName: string;
  koName: string;
  itemBio: string;
  price: number;
  quantity: number;
  limitType: 'LIMITED' | 'NORMAL';
  images: ImageType[];
  itemStatus: ItemStatusType;
  itemOptionGroupInfoList: ItemOptionGroupResponseListType;
  videoUrl: string;
  productId: string;
}

export interface GetItemDetailResponseType extends DefaultApiResponseType {
  data: ItemDetailType;
}

export interface ItemListType {
  content: ItemType[];
  pageable: {
    pageNumber: number;
  };
  last: boolean;
}

export interface GetRecommendItemListResponseType extends DefaultApiResponseType {
  data: ItemListType;
}
