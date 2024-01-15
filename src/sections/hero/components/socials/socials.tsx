import {
  UilInstagram,
  UilDribbble,
  UilGithubAlt,
} from "@iconscout/react-unicons";

import styles from "./styles.module.scss";

const Socials = () => {
  return (
    <div className={styles["socials"]}>
      <a
        className={styles["icon"]}
        href="https://www.instagram.com/"
        target="_blank"
      >
        <UilInstagram />
      </a>
      <a
        className={styles["icon"]}
        href="https://dribbble.com/"
        target="_blank"
      >
        <UilDribbble />
      </a>
      <a
        className={styles["icon"]}
        href="https://github.com/vituchini"
        target="_blank"
      >
        <UilGithubAlt />
      </a>
    </div>
  );
};

export { Socials };
