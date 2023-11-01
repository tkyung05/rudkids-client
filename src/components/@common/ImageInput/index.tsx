import { ChangeEvent, MutableRefObject } from 'react';

interface ImageInputPropsType {
  placeholder: string;
  imageRef: MutableRefObject<any>;
  multiple: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function ImageInput(props: ImageInputPropsType) {
  return (
    <input
      placeholder={props.placeholder}
      type="file"
      accept="image/png, image/jpg, image/jpeg, image/svg"
      multiple={props.multiple}
      ref={props.imageRef}
      onChange={(e) => props.onChange(e)}
      style={{ display: 'none' }}
    />
  );
}

export default ImageInput;
