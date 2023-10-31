import { ChangeEvent, Dispatch, SetStateAction } from 'react';

function useInput() {
  const handleChangeValue = (
    e: ChangeEvent<HTMLInputElement>,
    setStateFn: Dispatch<SetStateAction<string>>
  ) => {
    setStateFn(e.currentTarget.value);
  };

  return { handleChangeValue };
}

export default useInput;
