import { DefaultApiResponseType } from './api';
import { ImageType } from './image';
import { ItemListType } from './item';

export interface ProductType {
  productId: string;
  title: string;
  frontImageUrl: string;
  backImageUrl: string;
}

export interface ProductListType {
  content: ProductType[];
  pageable: {
    pageNumber: number;
  };
  last: boolean;
}

export interface GetProductListResponseType extends DefaultApiResponseType {
  data: ProductListType;
}

export interface GetMysteryListResponseType extends DefaultApiResponseType {
  data: ProductType;
}

export interface ProductDetailType {
  title: string;
  bio: string;
  frontImage: ImageType;
  backImage: ImageType;
  bannerImage: ImageType;
  mobileImage: ImageType;
  items: ItemListType;
}

export interface ProductDetailResponseType extends DefaultApiResponseType {
  data: ProductDetailType;
}
