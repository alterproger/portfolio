import { SectionSubtitle, SectionTitle } from '@/components/components';
import clsx from 'clsx';
import Image from 'next/image';
import { Info } from './components/components';
import FileIcon from '@/assets/icons/files.svg';
import styles from './styles.module.scss';

import aboutImg from '@/assets/img/about.jpg';

const About = () => {
  return (
    <section
      id="about"
      className={clsx('section', styles['about'])}
    >
      <SectionTitle>About Me</SectionTitle>
      <SectionSubtitle>My introduction</SectionSubtitle>

      <div className={clsx('container grid', styles['container'])}>
        <Image
          className={styles['img']}
          src={aboutImg}
          alt="A smiling guy"
          width={899}
          height={899}
        />
        <div className={styles['info']}>
          <Info />

          <p className={styles['description']}>
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>

          <a
            className="button button--flex"
            href="/files/John-Cv.pdf"
            download=""
          >
            Download CV
            <FileIcon className="button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export { About };
