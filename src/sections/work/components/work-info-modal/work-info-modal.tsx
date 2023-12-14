import { Modal, ModalProperties, ModalTitle } from '@/components/components';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';
import styles from './styles.module.scss';

type Properties = Omit<ModalProperties, 'children'> & {
  title: string;
  images: StaticImageData[];
  description: string;
  url: string;
  stack: string[];
};

const WorkInfoModal: React.FC<Properties> = ({
  isOpen,
  onClose,
  title,
  images,
  description,
  stack,
  url,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Image
        className={styles['img']}
        src={images[0]}
        alt={`${title} project image`}
        width={640}
        height={420}
      />
      <ModalTitle>{title}</ModalTitle>
      <p className={styles['description']}>{description}</p>
      <div className={styles['content']}>
        <div className={styles['meta']}>
          <span className={styles['meta-title']}>Stack:</span>
          <span className={styles['meta-text']}>{stack.join(', ')}</span>
        </div>
      </div>
      <a
        className={clsx('button button--flex', styles['button'])}
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        Demo <BiLinkExternal className="button-icon" />
      </a>
    </Modal>
  );
};

export { WorkInfoModal };
