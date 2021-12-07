import Menu from "@/components/Menu";
import Toggle from "@/components/Toggle";

import styles from "@/styles/Settings.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const defaultSettings = {
  "dark-mode": "true"
};

function handler() {
  // handler for resetting settings to default
  if (window.confirm("Are you sure you want to reset all settings?")) {
    for (const setting in defaultSettings) {
      localStorage.setItem(setting, defaultSettings[setting]);
    }

    window.location.reload();
  }
}

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

      <section className={styles.reset} onClick={handler}>
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className={styles.faTriangleExclamation}
        />
        Reset all settings
      </section>
    </main>
  );
}
