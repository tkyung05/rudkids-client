import { DefaultApiResponseType } from './api';

export type ImageType = {
  path: string;
  url: string;
};

export type PreviewImageType = {
  imageUrl: string;
  imageFile: File | null;
};

export interface UploadImageSingleResponseType extends DefaultApiResponseType {
  data: ImageType;
}
