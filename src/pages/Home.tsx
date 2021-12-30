import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>Programming Quiz</h1>
        <div>
          Made by
          <a
            href="https://github.com/CubingSoda"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            CubingSoda{" "}
          </a>
          and{" "}
          <a
            href="https://github.com/SealsRock12"
            target="_blank"
            rel="noreferrer"
          >
            SealsRock12
          </a>
        </div>
      </div>

      <div className={styles.playWrapper}>
        <a className={[styles.playBtn, "play-btn"].join(" ")} href="play">
          PLAY
        </a>
      </div>
    </main>
  );
}
