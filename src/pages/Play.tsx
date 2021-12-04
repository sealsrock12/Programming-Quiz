import Menu from "@/components/Menu";
import Problem from "@/components/Play/Problem";
import Submit from "@/components/Play/Submit";
import Meta from "@/components/Meta";

import styles from "@/styles/Play.module.scss";

export default function Play() {
  return (
    <main className={styles.main}>
      {/* <Menu playSelected /> */}
      <article className={styles.problemContainer}>
        <Problem />
        <Submit />
      </article>
    </main>
  );
}
