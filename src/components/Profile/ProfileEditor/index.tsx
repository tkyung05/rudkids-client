import DEFAULT_PROFILE from '@/assets/png/default_profile.jpg';
import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useGetUser, useUpdateUser } from '@/hooks/@queries/user';
import useImageManager from '@/hooks/useImageManager';
import useAlert from '@/hooks/useToast';

import { PreviewImageType } from '@/@types/image';

import { IMAGE_KEY, PATH } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';

import { removeAccessToken, removeRefreshToken } from '@/utils';

import imageApi from '@/api/image';

import ImageInput from '../../@common/ImageInput';
import * as S from './ProfileEditor.style';

interface ProfileFormType {
  name: string;
}

function ProfileEditor() {
  const { onToast } = useAlert();
  const { push } = useRouter();

  const { data: user, status } = useGetUser();
  const { mutate: updateProfile } = useUpdateUser();

  const profileImageRef = useRef(null);
  const [previewImage, setPreviewImage] = useState<PreviewImageType>({
    imageUrl: DEFAULT_PROFILE.src,
    imageFile: null,
  });
  const { getSinglePreviewImage, handleClickImageUpload } = useImageManager();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormType>();

  useEffect(() => {
    SetProfileInfo();
  }, [user]);

  const onValid = async (payload: ProfileFormType) => {
    if (!user) return;

    if (previewImage.imageFile) {
      const profileFormData = new FormData();
      profileFormData.append(IMAGE_KEY.SINGLE, previewImage.imageFile);

      const profileImage = await imageApi.postSingle(profileFormData);

      if (profileImage) {
        updateProfile({
          name: payload.name,
          profileImageUrl: profileImage.url,
          profileImagePath: profileImage.path,
        });
      }
    } else {
      updateProfile({
        name: payload.name,
        profileImageUrl: user.profileImage.url,
        profileImagePath: user.profileImage.path,
      });
    }

    onToast('success', '회원님의 정보가 업데이트 되었습니다.');
  };

  const SetProfileInfo = () => {
    if (user) {
      setValue('name', user.name);
      setPreviewImage({ imageUrl: user.profileImage.url, imageFile: null });
    }
  };

  const handleChangePreviewImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const { imageUrl, imageFile } = getSinglePreviewImage(event);
    setPreviewImage({ imageUrl, imageFile });
  };

  const handleClickLogoutButton = () => {
    removeAccessToken();
    removeRefreshToken();

    location.replace(PATH.AUTH);
  };

  return (
    <>
      {status === STATUS_TYPE.SUCCESS && user && (
        <S.Container>
          <S.ProfileContainer>
            <S.ProfileUploadButton onClick={() => handleClickImageUpload(profileImageRef)}>
              <S.ProfilePreviewImage
                src={previewImage.imageUrl}
                width={1000}
                height={1000}
                alt="프로필 사진 미리보기"
              />
            </S.ProfileUploadButton>

            <ImageInput
              placeholder="프로필 사진"
              imageRef={profileImageRef}
              multiple={false}
              onChange={(e) => handleChangePreviewImage(e)}
            />

            <S.ProfileForm onSubmit={handleSubmit(onValid)}>
              <S.UserFieldName>Name</S.UserFieldName>
              <S.UserFieldInput
                type="text"
                placeholder="your name"
                {...register('name', {
                  minLength: { value: 2, message: '2글자 이상으로 부탁합니다!' },
                  maxLength: { value: 10, message: '10글자 이하로 부탁합니다!' },
                })}
                defaultValue={user.name}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <S.ErrorText>{message}</S.ErrorText>}
              />
              <S.UserFieldName>Phone Number</S.UserFieldName>
              <S.UserFieldInput type="text" defaultValue={user.phoneNumber} disabled />
              <S.UserFieldName>E-mail</S.UserFieldName>
              <S.UserFieldInput type="email" value={user.email} disabled />

              <S.ButtonBundle>
                <S.Button type="submit">Profile Update</S.Button>
                <S.CancelButton type="button" onClick={() => push(PATH.PROFILE)}>
                  Cancel
                </S.CancelButton>
              </S.ButtonBundle>

              <S.LogOutButton type="button" onClick={handleClickLogoutButton}>
                Logout
              </S.LogOutButton>
            </S.ProfileForm>
          </S.ProfileContainer>
        </S.Container>
      )}
    </>
  );
}

export default ProfileEditor;
