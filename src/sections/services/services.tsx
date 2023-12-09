'use client';
import { SectionSubtitle, SectionTitle } from '@/components/components';
import clsx from 'clsx';
import { Specialty } from './components/components';
import { SPECIALTIES } from './libs/constants';
import styles from './styles.module.scss';

const Services = () => {
  return (
    <section className={clsx('section', styles['services'])}>
      <SectionTitle>Services</SectionTitle>
      <SectionSubtitle>What I offer</SectionSubtitle>

      <div className={clsx('container grid', styles['container'])}>
        {SPECIALTIES.map((specialty) => (
          <Specialty
            key={specialty.title}
            {...specialty}
          />
        ))}
      </div>
    </section>
  );
};

export { Services };
