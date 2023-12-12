'use client';

import { UilArrowUp } from '@iconscout/react-unicons';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { useScroll } from '@/hooks/hooks';

const WINDOW_SCROLL_OFFSET = 560;

const ScrollToTop = () => {
  const { isInView } = useScroll(WINDOW_SCROLL_OFFSET);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={clsx(styles['button'], isInView && styles['button-show'])}
      type="button"
      onClick={handleScrollToTop}
    >
      <UilArrowUp className={styles['icon']} />
    </button>
  );
};

export { ScrollToTop };
