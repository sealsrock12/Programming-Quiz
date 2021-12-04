import Meta from "@/components/Meta";
import Menu from "@/components/Menu";
import Toggle from "@/components/Toggle";

import styles from "@/styles/Settings.module.scss";

import storage from "@/lib/storage";

export default function Settings() {
  // const [darkMode, setDarkMode] = useSticky("darkMode", true);
  // const darkMode = true;

  // defaults
  let darkMode = storage.getItem("dark-mode");

  if (!darkMode) {
    darkMode = storage.setItem("dark-mode", "true");
  }

  return (
    <main className={styles.main}>
      <Meta page="Settings" />
      <Menu settingsSelected />

      <section className={styles.settingsWrapper}>
        <div className={styles.settingRow}>
          <span>Dark Mode</span>
          <Toggle checked={darkMode === "true"} name="dark-mode" />
        </div>
        {/* <div className={styles.settingRow}>
          <span className="loose">asdasd</span>
          <Toggle />
        </div> */}
      </section>
    </main>
  );
}
