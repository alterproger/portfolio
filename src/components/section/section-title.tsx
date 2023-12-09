import styles from './styles.module.scss';

const SectionTitle = ({ children }: { children: string }) => {
  return <h2 className={styles['title']}>{children}</h2>;
};

export { SectionTitle };
