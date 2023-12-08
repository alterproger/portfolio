import clsx from 'clsx';
import styles from './styles.module.scss';
import { Info, ScrollDown, Socials } from './components/components';

const Hero = () => {
  return (
    <section
      className={clsx('section', styles['section'])}
      id="home"
    >
      <div className={clsx('container', styles['container'])}>
        <div className={styles['content']}>
          <Socials />
          <div className={styles['img']} />
          <Info />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export { Hero };
