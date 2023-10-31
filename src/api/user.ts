import { GetUserResponseType, UpdateUserType } from '@/@types/user';

import rudkidsApi from '.';

const userApi = {
  endPoint: {
    getUser: '/user',
    updateUser: '/user',
  },

  getUser: async () => {
    const { data } = (await rudkidsApi.get(userApi.endPoint.getUser)) as GetUserResponseType;

    return data;
  },

  update: async (user: UpdateUserType) => {
    const response = await rudkidsApi.put(userApi.endPoint.updateUser, user);

    return response;
  },
};

export default userApi;
