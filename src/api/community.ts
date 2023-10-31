import { CommunityType, GetCommunityListResponseType } from '@/@types/community';

import rudkidsApi from '.';

const communityApi = {
  endPoint: {
    getCommunityList: '/community',
    getCommunityDetail: '/community/',
  },

  getCommunityList: async (page: number, type: CommunityType) => {
    const { data } = (await rudkidsApi.get(communityApi.endPoint.getCommunityList, {
      params: {
        type,
        page,
        size: 10,
      },
    })) as GetCommunityListResponseType;

    return data;
  },

  getCommunityDetail: async (communityId: string) => {
    const { data } = await rudkidsApi.get(communityApi.endPoint.getCommunityDetail + communityId);

    return data;
  },
};

export default communityApi;
