import Image, { type StaticImageData } from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from './styles.module.scss';

type Properties = {
  image: StaticImageData;
  title: string;
};

const WorkItem: React.FC<Properties> = ({ image, title }) => {
  return (
    <div className={styles['card']}>
      <Image
        className={styles['img']}
        src={image}
        alt={`${title} project image`}
        width={640}
        height={420}
      />
      <h3 className={styles['title']}>{title}</h3>
      <a
        className={styles['button']}
        href="#"
      >
        Demo <BiRightArrowAlt className={styles['button-icon']} />
      </a>
    </div>
  );
};

export { WorkItem };
