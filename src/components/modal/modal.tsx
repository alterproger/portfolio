import { UilTimes } from '@iconscout/react-unicons';
import styles from './styles.module.scss';
import clsx from 'clsx';

const ModalTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className={styles['modal-title']}>{children}</h3>
);

type ModalProperties = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProperties> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={clsx(styles['modal'], isOpen && styles['modal-active'])}
      onClick={onClose}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles['modal-content']}
      >
        <button className={styles['modal-close']}>
          <UilTimes onClick={onClose} />
        </button>

        {children}
      </div>
    </div>
  );
};

export { Modal, ModalTitle, type ModalProperties };
