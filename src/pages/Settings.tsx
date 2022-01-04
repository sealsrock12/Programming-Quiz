import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";
import Toggle from "@/components/Toggle";
import { isJSON, defaultSettings } from "@/lib/site";
import { langToNiceName } from "@/lib/problems";
import { generator } from "@/lib/generator";

import styles from "@/styles/Settings.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function reset() {
  // handler for resetting settings to default
  if (window.confirm("Are you sure you want to reset all settings?")) {
    localStorage.removeItem("settings");
    window.location.reload();
  }
}

export default function Settings() {
  function langChange(e) {
    const settings = JSON.parse(localStorage.getItem("settings")!);

    if (e.target.value === "all") {
      setLang("-");

      settings.all = true;
      localStorage.setItem("settings", JSON.stringify(settings));
    } else {
      setLang(e.target.value);

      settings.all = false;
      localStorage.setItem("settings", JSON.stringify(settings));
    }
  }

  const [lang, setLang] = useState(localStorage.getItem("lang")!);
  const [settings, setSettings] = useState(
    localStorage.getItem("settings")
      ? JSON.parse(localStorage.getItem("settings")!)
      : () => {
          localStorage.setItem("settings", JSON.stringify(defaultSettings));
          return defaultSettings;
        }
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);

    if (lang === "-") {
      localStorage.setItem("id", "-");
    }
  }, [lang]);

  const storedLang = localStorage.getItem("lang");

  if (JSON.parse(localStorage.getItem("settings")!)["all"] !== true) {
    const generated = generator();
    localStorage.setItem("lang", "f");
    localStorage.setItem(
      "id",
      (localStorage.getItem("lang")! === "-" ? "-" : generated.id).toString()
    );
  }

  return (
    <>
      <Helmet>
        <title>Settings | Programming Quiz</title>
      </Helmet>

      <Menu settingsSelected />
      <main className={styles.main}>
        {/* light mode */}
        <section className={styles.settingsWrapper}>
          <div className={styles.settingRow}>
            <span>Light Mode</span>
            <Toggle checked={settings.lightMode === true} name="lightMode" />
          </div>

          {/* toggle between lang */}
          <div className={styles.settingRow}>
            <span>Programming Language</span>

            <select
              id="choose-lang"
              onChange={e => {
                langChange(e);
              }}
              value={lang}
            >
              <option value="all">All</option>

              {Object.keys(langToNiceName).map(langShort => {
                return (
                  <option value={langShort}>{langToNiceName[langShort]}</option>
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
