'use client';

import Image, { type StaticImageData } from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from './styles.module.scss';
import { WorkInfoModal } from '../work-info-modal/work-info-modal';
import { useState } from 'react';

type Properties = {
  images: StaticImageData[];
  title: string;
  description: string;
  url: string;
  stack: string[];
};

const WorkItem: React.FC<Properties> = ({
  images,
  title,
  description,
  url,
  stack,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles['card']}>
      <Image
        className={styles['img']}
        src={images[0]}
        alt={`${title} project image`}
        width={640}
        height={420}
      />
      <h3 className={styles['title']}>{title}</h3>
      <span
        className={styles['button']}
        onClick={() => setIsModalOpen(true)}
      >
        View More <BiRightArrowAlt className={styles['button-icon']} />
      </span>

      <WorkInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        images={images}
        description={description}
        stack={stack}
        url={url}
      />
    </div>
  );
};

export { WorkItem };
