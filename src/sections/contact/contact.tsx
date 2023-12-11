import { SectionSubtitle, SectionTitle } from '@/components/components';
import clsx from 'clsx';
import { ContactCard, ContactForm } from './components/components';
import styles from './styles.module.scss';

const Contact = () => {
  return (
    <section
      className={clsx(styles['section'], 'section')}
      id="contact"
    >
      <SectionTitle>Get is touch</SectionTitle>
      <SectionSubtitle>Contact Me</SectionSubtitle>

      <div className={clsx('container grid', styles['container'])}>
        <div className={styles['content']}>
          <h3 className={styles['title']}>Talk to me</h3>

          <div className={styles['info']}>
            <ContactCard
              title="Email"
              text="user@gmail.com"
              href="mailto:examplemail@gmail.com"
              icon="email"
            />
            <ContactCard
              title="Whatsapp"
              text="999-888-777"
              href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!"
              icon="messenger"
            />
            <ContactCard
              title="Messenger"
              text="user.fb123"
              href="https://m.me/crypticalcoder"
              icon="whatsapp"
            />
          </div>
        </div>

        <div className={styles['content']}>
          <h3 className={styles['title']}>Write me your project</h3>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export { Contact };
