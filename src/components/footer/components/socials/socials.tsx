import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';

import styles from './styles.module.scss';

const Socials = () => {
  return (
    <div className={styles['socials']}>
      <a
        className={styles['icon']}
        href="https://www.facebook.com/"
        target="_blank"
      >
        <BiLogoFacebook />
      </a>
      <a
        className={styles['icon']}
        href="https://instagram.com/"
        target="_blank"
      >
        <BiLogoInstagram />
      </a>
      <a
        className={styles['icon']}
        href="https://twitter.com/"
        target="_blank"
      >
        <BiLogoTwitter />
      </a>
    </div>
  );
};

export { Socials };
