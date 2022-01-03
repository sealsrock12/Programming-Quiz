import styles from "@/styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.customFooter}>
      <span>
        <span className={styles.copyright}>Copyright</span> &copy; 2022
        <span>
          {" "}
          <a href="/credits" className={styles.credits}>
            Programming Quiz Contributors
          </a>
        </span>
      </span>
    </footer>
  );
}
