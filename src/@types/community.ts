import { DefaultApiResponseType } from './api';

export type CommunityType = 'MAGAZINE' | 'POST';

export interface CommunityElementType {
  title: string;
  writer: string;
  image: string;
  communityId: string;
}

export interface CommunityListType {
  content: CommunityElementType[];
  pageable: {
    pageNumber: number;
  };
  last: boolean;
}

export interface GetCommunityListResponseType extends DefaultApiResponseType {
  data: CommunityListType;
}
