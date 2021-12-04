import styles from "@/styles/component-styles/Menu.module.scss";
import Button from "@/components/Button";
import React, { useRef, useEffect } from "react";

export default function Menu({
  playSelected,
  statsSelected,
  settingsSelected,
  bugSelected
}) {
  const menuRef = useRef();
  const hamburgerRef = useRef();
  const hamburgerClick = _ => {
    menuRef.current.classList.toggle(styles.OPEN);
    hamburgerRef.current.classList.toggle(styles.rotate);
  };

  return (
    <div>
      <div id={styles.hamburgerContainer} ref={hamburgerRef}>
        <img
          src="/hamburger-icon.svg"
          id={styles.hamburger}
          width="32"
          height="32"
          onClick={hamburgerClick}
        />
      </div>

      <nav ref={menuRef} className={styles.menu}>
        <Button
          className={["NOT-round", styles.navLink].join(" ")}
          link
          href="/play"
          selected={playSelected}
        >
          PLAY
        </Button>
        <Button
          className={["NOT-round", styles.navLink].join(" ")}
          link
          href="/stats"
          selected={statsSelected}
        >
          STATS
        </Button>
        <Button
          className={["NOT-round", styles.navLink].join(" ")}
          link
          href="/settings"
          selected={settingsSelected}
        >
          SETTINGS
        </Button>
        <Button
          className={["NOT-round", styles.navLink].join(" ")}
          link
          href="/bug-report"
          selected={bugSelected}
        >
          REPORT <span className={styles.error}>ERROR</span>
        </Button>
      </nav>
    </div>
  );
}
