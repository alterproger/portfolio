'use client';

import {
  UilArrowRight,
  UilCheckCircle,
  UilTimes,
} from '@iconscout/react-unicons';
import clsx from 'clsx';
import { useState } from 'react';
import { type Specialty as Properties } from '../../libs/types';
import styles from './styles.module.scss';

const Specialty: React.FC<Properties> = ({
  icon,
  description,
  displayTitle,
  services,
  title,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Icon = icon;

  return (
    <div className={styles['content']}>
      <div>
        <Icon className={styles['icon']} />
        <h3 className={styles['title']}>{displayTitle}</h3>
      </div>
      <span
        className={styles['button']}
        onClick={() => setIsModalOpen(true)}
      >
        View More <UilArrowRight className={styles['button-icon']} />
      </span>

      <div
        className={clsx(styles['modal'], isModalOpen && styles['modal-active'])}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles['modal-content']}
        >
          <UilTimes
            className={styles['modal-close']}
            onClick={() => setIsModalOpen(false)}
          />

          <h3 className={styles['modal-title']}>{title}</h3>
          <p className={styles['modal-description']}>{description}</p>

          <ul className={clsx('grid', styles['modal-services'])}>
            {services.map((service) => (
              <li
                key={service}
                className={styles['modal-service']}
              >
                <UilCheckCircle className={styles['modal-icon']} />
                <p className={styles['modal-info']}>{service}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Specialty };
