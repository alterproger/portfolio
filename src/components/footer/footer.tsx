import clsx from "clsx";
import styles from "./styles.module.scss";
import { Socials } from "./components/components";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={clsx(styles["container"], "container")}>
        <h1 className={styles["title"]}>Tyshkevych</h1>

        <ul className={styles["list"]}>
          <li>
            <a className={styles["link"]} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={styles["link"]} href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className={styles["link"]} href="#testimonials">
              Testimonials
            </a>
          </li>
        </ul>

        <Socials />

        <span className={styles["copy"]}>
          &#169; Alex Tyshkevych. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export { Footer };
