import styles from './styles.module.scss';

const SectionSubtitle = ({ children }: { children: string }) => {
  return <span className={styles['subtitle']}>{children}</span>;
};

export { SectionSubtitle };
