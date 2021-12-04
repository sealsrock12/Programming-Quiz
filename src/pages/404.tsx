import styles from "@/styles/global-styles/404.module.scss";

export default function Custom404() {
  return (
    <main className={styles.main}>
      <span className={styles.pageNot}>Page Not</span>
      <span className={styles.found}>Found</span>
      <h2 className={styles.description}>
        Sorry, we cannot find the page you are looking for.
      </h2>
    </main>
  );
}
