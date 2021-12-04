import Menu from "@/components/Menu";
import Toggle from "@/components/Toggle";

import styles from "@/styles/Settings.module.scss";

export default function Settings() {
  // defaults
  let darkMode = localStorage.getItem("dark-mode");

  if (!darkMode) {
    darkMode = localStorage.setItem("dark-mode", "true");
  }

  return (
    <main className={styles.main}>
      <Menu settingsSelected />

      <section className={styles.settingsWrapper}>
        <div className={styles.settingRow}>
          <span>Dark Mode</span>
          <Toggle checked={darkMode === "true"} name="dark-mode" />
        </div>
      </section>
    </main>
  );
}
