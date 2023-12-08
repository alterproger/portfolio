import { BiBadgeCheck } from 'react-icons/bi';

import styles from './styles.module.scss';

type Skill = {
  name: string;
  level: string;
};

type Properties = {
  title: string;
  skills: Skill[][];
};

const SkillList: React.FC<Properties> = ({ title, skills }) => {
  return (
    <div className={styles['content']}>
      <h3 className={styles['title']}>{title}</h3>
      <div className={styles['box']}>
        {skills.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={styles['group']}
          >
            {group.map((skill) => (
              <div
                key={skill.name}
                className={styles['info']}
              >
                <BiBadgeCheck className={styles['icon']} />
                <div>
                  <h3 className={styles['name']}>{skill.name}</h3>
                  <span className={styles['level']}>{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { SkillList };
