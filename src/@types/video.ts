import { DefaultApiResponseType } from './api';

export interface ThumbnailElementType {
  imageUrl: string;
  name: string;
  videoBio: string;
}

export interface VideoThumbnailListType {
  content: ThumbnailElementType[];
  pageable: {
    pageNumber: number;
  };
  last: boolean;
}

export interface GetVideoThumbnailListResponseType extends DefaultApiResponseType {
  data: VideoThumbnailListType;
}

export interface GetVideoDetailResponseType extends DefaultApiResponseType {
  data: {
    name: string;
    videoUrl: string;
  };
}
