import { useConfirmationBox } from '../components/Pages/ConfirmationBox/ConfirmationBoxProvider';

let resolveCallback;

const useConfirm = () => {
  const { displayConfirmationBox } = useConfirmationBox();

  const onCancel = () => {
    displayConfirmationBox(false);
    resolveCallback(false);
  };
  const onConfirm = () => {
    displayConfirmationBox(false);
    resolveCallback(true);
  };

  const confirm = () => {
    displayConfirmationBox(true);

    return new Promise((res, rej) => {
      resolveCallback = res;
    });
  };

  return { onCancel, onConfirm, confirm };
};

export default useConfirm;
