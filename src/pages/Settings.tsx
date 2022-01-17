import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";
import Toggle from "@/components/Toggle";
import { langList, langToNiceName } from "@/lib/problems";

import styles from "@/styles/Settings.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "@/components/AppProvider";
import { v4 as uuidv4 } from "uuid";

function reset() {
  // handler for resetting settings to default
  if (!window.confirm("Are you sure you want to reset all settings?")) return;

  Object.keys(localStorage).forEach(item => {
    if (item.startsWith("settings-")) {
      localStorage.removeItem(item);
    }
  });
  window.location.reload();
}

export default function Settings() {
  const { lightMode, setLightMode, ads, setAds, problemType, setProblemType } =
    useContext(AppContext);

  return (
    <>
      <Helmet>
        <title>Settings | Programming Quiz</title>
      </Helmet>

      <Menu settingsSelected />
      <main className={styles.main}>
        <section className={styles.settingsWrapper}>
          {/* light mode */}
          <div className={styles.settingRow}>
            <span>Light Mode</span>
            <Toggle
              setter={setLightMode}
              checked={lightMode === true}
              name="lightMode"
            />
          </div>

          {/* ads */}
          {/* <div className={styles.settingRow}>
            <span>Ads</span>
            <Toggle setter={setAds} checked={ads === true} name="ads" />
          </div> */}

          {/* toggle between lang */}
          <div className={styles.settingRow}>
            <span className={styles.changeLangTitle}>Programming Language</span>

            <select
              onChange={e => {
                setProblemType(e.target.value as LangSettingType);
              }}
              value={problemType}
            >
              <option value="all">All</option>

              {langList.map(langShort => {
                return (
                  <option value={langShort} key={uuidv4()}>
                    {langToNiceName[langShort]}
                  </option>
                );
              })}
            </select>
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
