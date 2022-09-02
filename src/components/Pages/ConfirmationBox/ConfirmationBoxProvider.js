import { createContext, useContext, useState } from 'react';
import useConfirm from '../../../hooks/useConfirm';
import { ConfirmationBoxWrapper } from './ConfirmationBox.styles';

const confirmationContext = createContext({});

const ConfirmationBoxProvider = ({ children }) => {
  const [confirmationDisplay, setConfirmationDisplay] = useState(false);

  const displayConfirmationBox = (value) => {
    setConfirmationDisplay(value);
  };

  const { onConfirm, onCancel } = useConfirm();

  return (
    <confirmationContext.Provider
      value={{
        confirmationDisplay,
        displayConfirmationBox,
        onConfirm,
        onCancel,
      }}
    >
      <ConfirmationBoxWrapper>{children}</ConfirmationBoxWrapper>
    </confirmationContext.Provider>
  );
};

export const useConfirmationBox = () => useContext(confirmationContext);

export default ConfirmationBoxProvider;
