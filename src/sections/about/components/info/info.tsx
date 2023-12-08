import clsx from 'clsx';
import styles from './styles.module.scss';

import { BiAward, BiBriefcaseAlt, BiSupport } from 'react-icons/bi';

const Info = () => {
  return (
    <div className={clsx(styles['info'], 'grid')}>
      <div className={styles['box']}>
        <BiAward className={styles['icon']} />
        <h3 className={styles['title']}>Experience</h3>
        <span className={styles['subtitle']}>8 Years Working</span>
      </div>
      <div className={styles['box']}>
        <BiBriefcaseAlt className={styles['icon']} />
        <h3 className={styles['title']}>Completed</h3>
        <span className={styles['subtitle']}>48 + Projects</span>
      </div>
      <div className={styles['box']}>
        <BiSupport className={styles['icon']} />
        <h3 className={styles['title']}>Support</h3>
        <span className={styles['subtitle']}>Online 24/7</span>
      </div>
    </div>
  );
};

export { Info };
