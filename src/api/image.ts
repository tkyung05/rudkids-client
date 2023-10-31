import { UploadImageSingleResponseType } from '@/@types/image';

import { API } from '@/constants/api';

import rudkidsApi from '.';

const imageApi = {
  endPoint: {
    single: '/image',
  },

  postSingle: async (image: FormData) => {
    try {
      const { data } = (await rudkidsApi.post(imageApi.endPoint.single, image, {
        headers: {
          [API.CONTENT_TYPE.KEY]: API.CONTENT_TYPE.FORM_DATA,
        },
        transformRequest: (formData: any) => formData,
      })) as UploadImageSingleResponseType;

      console.log('img', data);

      return data;
    } catch (e) {
      alert('이미지 업로드 실패');

      return null;
    }
  },
};

export default imageApi;
