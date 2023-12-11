import {
  BiRightArrowAlt,
  BiMailSend,
  BiLogoMessenger,
  BiLogoWhatsapp,
} from 'react-icons/bi';
import styles from './styles.module.scss';

const contactCardIcon = {
  email: BiMailSend,
  messenger: BiLogoMessenger,
  whatsapp: BiLogoWhatsapp,
};

type Properties = {
  title: string;
  text: string;
  href: string;
  icon: keyof typeof contactCardIcon;
};

const ContactCard: React.FC<Properties> = ({ text, title, href, icon }) => {
  const Icon = contactCardIcon[icon];

  return (
    <div className={styles['card']}>
      <Icon className={styles['icon']} />
      <h3 className={styles['title']}>{title}</h3>
      <span className={styles['text']}>{text}</span>
      <a
        className={styles['button']}
        href={href}
      >
        Write me
        <BiRightArrowAlt className={styles['button-icon']} />
      </a>
    </div>
  );
};

export { ContactCard };
