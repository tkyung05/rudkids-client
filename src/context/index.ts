import { createContext } from 'react';

interface ICursorContext {
  setSelectedCursor: (cursorStatus: any) => void;
  setIsDisableCustomCursor: (power: boolean) => void;
}

const CursorContext = createContext<ICursorContext>({
  setSelectedCursor: () => {},
  setIsDisableCustomCursor: () => {},
});

export default CursorContext;
