import { ChangeEvent, RefObject } from 'react';

function useImageManager() {
  const getSinglePreviewImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFileList = e.target.files as FileList;
    const imageFile = imageFileList[0];
    const imageUrl = URL.createObjectURL(imageFile);

    return { imageUrl, imageFile };
  };

  const handleClickImageUpload = (inputObj: RefObject<HTMLInputElement>) => {
    if (!inputObj.current) return;
    inputObj.current.click();
  };

  return { getSinglePreviewImage, handleClickImageUpload };
}

export default useImageManager;
