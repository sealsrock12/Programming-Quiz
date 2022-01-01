import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";
import Toggle from "@/components/Toggle";
import { isJSON, defaultSettings } from "@/lib/site";

import styles from "@/styles/Settings.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function reset() {
  // handler for resetting settings to default
  if (window.confirm("Are you sure you want to reset all settings?")) {
    localStorage.removeItem("settings");
    window.location.reload();
  }
}

export default function Settings() {
  const storedSettings = localStorage.getItem("settings");
  let settings;

  if (!storedSettings) {
    // not stored in localStorage
    localStorage.setItem("settings", JSON.stringify(defaultSettings));
    settings = defaultSettings;
  } else {
    // verify the value in localStorage is JSON
    if (isJSON(storedSettings)) {
      settings = JSON.parse(storedSettings!);
    } else {
      settings = defaultSettings;
      localStorage.setItem("settings", JSON.stringify(settings));
    }
  }

  return (
    <>
      <Helmet>
        <title>Settings | Programming Quiz</title>
      </Helmet>

      <Menu settingsSelected />
      <main className={styles.main}>
        <section className={styles.settingsWrapper}>
          <div className={styles.settingRow}>
            <span>Light Mode</span>
            <Toggle checked={settings.lightMode === true} name="lightMode" />
          </div>
        </section>

        <section className={styles.reset} onClick={reset}>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className={styles.faTriangleExclamation}
          />
          Reset all settings
        </section>
      </main>
    </>
  );
}
