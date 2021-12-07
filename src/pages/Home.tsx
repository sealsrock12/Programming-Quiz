import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>Programming Quiz</h1>
        <div>
          Made by
          <a href="https://github.com/BypassSpace"> BypassSpace </a>
          and <a href="https://github.com/SealsRock12">SealsRock12</a>
        </div>
      </div>

      <div className={styles.playWrapper}>
        <a href="/play">
          <a className={[styles.playBtn, "play-btn"].join(" ")}>PLAY</a>
        </a>
      </div>
    </main>
  );
}
