'use client';

import SendIcon from '@/assets/icons/send.svg';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    project: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: [e.target.value],
    }));
  };

  return (
    <form className={styles['form']}>
      <div className={styles['box']}>
        <label
          className={styles['tag']}
          htmlFor=""
        >
          Name
        </label>
        <input
          className={styles['input']}
          type="text"
          name="name"
          placeholder="Insert your name"
          onChange={handleInputChange}
        />
      </div>

      <div className={styles['box']}>
        <label
          className={styles['tag']}
          htmlFor=""
        >
          Email
        </label>
        <input
          className={styles['input']}
          type="email"
          name="email"
          placeholder="Insert your email"
          onChange={handleInputChange}
        />
      </div>

      <div className={clsx(styles['box'], styles['area'])}>
        <label
          className={styles['tag']}
          htmlFor=""
        >
          Project
        </label>
        <textarea
          className={styles['input']}
          name="project"
          cols={30}
          rows={10}
          placeholder="Write your project"
          onChange={handleInputChange}
        />
      </div>

      <a
        className="button button--flex"
        href={`mailto:no-reply@gmail.com?subject=Cooperation offer from ${formValues.name}&body=${formValues.project}`}
      >
        Send Message
        <SendIcon className="button-icon" />
      </a>
    </form>
  );
};

export { ContactForm };
