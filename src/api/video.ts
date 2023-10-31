import { GetVideoDetailResponseType, GetVideoThumbnailListResponseType } from '@/@types/video';

import rudkidsApi from '.';

const videoApi = {
  endPoint: {
    getList: '/video',
    getSingle: '/video/',
  },

  getThumbnailList: async (page: number) => {
    const { data } = (await rudkidsApi.get(videoApi.endPoint.getList, {
      params: {
        page,
        size: 4,
      },
    })) as GetVideoThumbnailListResponseType;

    return data;
  },

  getVideoDetail: async (name: string | null) => {
    const { data } = (await rudkidsApi.get(
      videoApi.endPoint.getSingle + name
    )) as GetVideoDetailResponseType;

    return data;
  },
};

export default videoApi;
