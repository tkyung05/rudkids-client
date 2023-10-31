import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { UpdateUserType } from '@/@types/user';

import { PATH } from '@/constants';
import { CACHE_KEY, RESPONSE } from '@/constants/api';

import { removeAccessToken, removeRefreshToken } from '@/utils';

import userApi from '@/api/user';

import useAlert from '../useToast';

function useGetUser() {
  const { onToast } = useAlert();

  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.USER],
    queryFn: () => userApi.getUser(),
    onError: () => onError(),
  });

  const onError = () => {
    onToast('error', '회원 정보를 불러오는데 실패했습니다!');
    removeAccessToken();
    removeRefreshToken();
    location.replace(PATH.AUTH);
  };

  return { data, status };
}

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationFn: (user: UpdateUserType) => userApi.update(user),
    onSuccess: (res) => {
      if (res.status === RESPONSE.STATUS.OK) {
        queryClient.invalidateQueries([CACHE_KEY.USER]);

        push(PATH.PROFILE);
      }
    },
  });

  return { mutate };
}

export { useGetUser, useUpdateUser };
