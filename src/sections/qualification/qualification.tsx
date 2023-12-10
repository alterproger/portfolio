'use client';

import { SectionSubtitle, SectionTitle } from '@/components/components';
import { UilBriefcaseAlt, UilGraduationCap } from '@iconscout/react-unicons';
import clsx from 'clsx';
import { QualificationContent } from './components/components';
import { EDUCATION_TIMELINE, EXPERIENCE_TIMELINE } from './libs/constants';
import styles from './styles.module.scss';
import { useState } from 'react';

type Content = 'education' | 'experience';

const Qualification = () => {
  const [activeContent, setActiveContent] = useState<Content>('education');

  return (
    <section className={clsx('section', styles['qualification'])}>
      <SectionTitle>Qualification</SectionTitle>
      <SectionSubtitle>My personnel journey</SectionSubtitle>

      <div className={clsx('container', styles['container'])}>
        <div className={styles['tabs']}>
          <div
            className={clsx(styles['button'], 'button--flex', styles['active'])}
            onClick={() => setActiveContent('education')}
          >
            <UilGraduationCap className={styles['icon']} />
            Education
          </div>

          <div
            className={clsx(styles['button'], 'button--flex')}
            onClick={() => setActiveContent('experience')}
          >
            <UilBriefcaseAlt className={styles['icon']} />
            Experience
          </div>
        </div>

        <div className={styles['sections']}>
          {activeContent === 'education' && (
            <QualificationContent timeline={EDUCATION_TIMELINE} />
          )}
          {activeContent === 'experience' && (
            <QualificationContent timeline={EXPERIENCE_TIMELINE} />
          )}
        </div>
      </div>
    </section>
  );
};

export { Qualification };
