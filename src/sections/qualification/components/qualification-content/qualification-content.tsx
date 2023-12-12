import { UilCalendarAlt } from '@iconscout/react-unicons';
import { type TimelineItem } from '../../libs/types';
import styles from './styles.module.scss';
import { isEvenNumber } from '@/helpers/is-even-number';

type Properties = {
  timeline: TimelineItem[];
};

const QualificationContent: React.FC<Properties> = ({ timeline }) => {
  return (
    <div className={styles['content']}>
      {timeline.map((item, index) => (
        <div
          key={item.date}
          className={styles['info']}
        >
          {!isEvenNumber(index) && (
            <>
              <div />
              <div>
                <span className={styles['rounder']} />
                <span className={styles['line']} />
              </div>
            </>
          )}

          <div>
            <h3 className={styles['title']}>{item.title}</h3>
            <span className={styles['subtitle']}>{item.subtitle}</span>
            <div className={styles['calendar']}>
              <UilCalendarAlt />
              {item.date}
            </div>
          </div>

          {isEvenNumber(index) && (
            <div>
              <span className={styles['rounder']} />
              <span className={styles['line']} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { QualificationContent };
