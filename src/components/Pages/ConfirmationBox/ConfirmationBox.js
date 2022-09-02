import useConfirm from '../../../hooks/useConfirm';
import Button from '../../atoms/Button';
import { useConfirmationBox } from './ConfirmationBoxProvider';

const ConfirmationBox = () => {
  const { confirmationDisplay } = useConfirmationBox();
  const { onCancel, onConfirm } = useConfirm();
  return (
    <div>
      {confirmationDisplay ? (
        <div className="confirmation-box-container">
          <div>
            <p>Are you sure?</p>
            <Button action={onConfirm} value="Yes" />
            <Button action={onCancel} value="No" />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default ConfirmationBox;
