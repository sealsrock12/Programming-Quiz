import styles from "@/styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.customFooter}>
      <span>
        <span className={styles.copyright}>Copyright</span> &copy; 2022
        <span>
          <a
            href="https://github.com/CubingSoda"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            CubingSoda
          </a>
        </span>
        <span className={styles.and}> and </span>
        <span>
          <a
            href="https://github.com/SealsRock12"
            target="_blank"
            rel="noreferrer"
          >
            SealsRock12{" "}
          </a>
        </span>
        <span>
          and
          <a href="/credits" className={styles.credits}>
            {" "}
            Contributors
          </a>
        </span>
      </span>
    </footer>
  );
}
