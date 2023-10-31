import { DefaultApiResponseType } from './api';

export interface CollectionType {
  itemName: string;
  imageUrl: string;
}

export interface GetCollectionResponseType extends DefaultApiResponseType {
  data: CollectionType[];
}
