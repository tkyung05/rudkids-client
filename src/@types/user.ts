import { DefaultApiResponseType } from './api';
import { ImageType } from './image';

export interface UserType {
  email: string;
  name: string;
  phoneNumber: string;
  profileImage: ImageType;
  deliveringOrderCount: number;
  boughtCollectionItemCount: number;
}

export interface UpdateUserType {
  name: string;
  profileImageUrl: string;
  profileImagePath: string;
}

export interface GetUserResponseType extends DefaultApiResponseType {
  data: UserType;
}
