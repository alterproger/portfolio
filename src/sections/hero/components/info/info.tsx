import HandIcon from "@/assets/icons/hand.svg";
import SendIcon from "@/assets/icons/send.svg";
import styles from "./styles.module.scss";

const Info = () => {
  return (
    <div className={styles["info"]}>
      <h1 className={styles["title"]}>
        Alex Tyshkevych
        <HandIcon className={styles["hand"]} />
      </h1>
      <h3 className={styles["subtitle"]}>Software Engineer</h3>
      <p className={styles["description"]}>
        I&apos;m software engineer based in Lviv, and I&apos;m very passionate
        and dedicated to my work.
        <b>Let&apos;s cook something amazing together!</b>
      </p>
      <a className="button button--flex" href="#contact">
        Say hello
        <SendIcon className="button-icon" />
      </a>
    </div>
  );
};

export { Info };
