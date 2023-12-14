import { SectionSubtitle, SectionTitle } from '@/components/components';
import clsx from 'clsx';
import { SkillList } from './components/components';
import { BACKEND_SKILLS, FRONTEND_SKILLS } from './libs/constants';
import styles from './styles.module.scss';

const Skills = () => {
  return (
    <section
      className={clsx('section', styles['skills'])}
      id="skills"
    >
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>My technical stack</SectionSubtitle>

      <div className={clsx('container grid', styles['container'])}>
        <SkillList
          title="Frontend Developer"
          skills={FRONTEND_SKILLS}
        />
        <SkillList
          title="Backend Developer"
          skills={BACKEND_SKILLS}
        />
      </div>
    </section>
  );
};

export { Skills };
