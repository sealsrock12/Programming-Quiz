// import styles from "@/styles/component-styles/Menu.module.scss";
// import Button from "@/components/Button";

// import { FunctionalComponent } from "preact";
// import React, { useRef, useEffect } from "preact/hooks";

// interface Props {
//   playSelected?: boolean;
//   statsSelected?: boolean;
//   settingsSelected?: boolean;
//   bugSelected?: boolean;
// }

// const Menu: FunctionalComponent<Props> = ({
//   playSelected,
//   statsSelected,
//   settingsSelected,
//   bugSelected
// }) => {
//   const menuRef = useRef();
//   const hamburgerRef = useRef();
//   const hamburgerClick = _ => {
//     menuRef.current.classList.toggle(styles.OPEN);
//     hamburgerRef.current.classList.toggle(styles.rotate);
//   };

//   return (
//     <div>
//       <div id={styles.hamburgerContainer} ref={hamburgerRef}>
//         <img
//           src="/hamburger-icon.svg"
//           id={styles.hamburger}
//           width="32"
//           height="32"
//           onClick={hamburgerClick}
//         />
//       </div>

//       <nav ref={menuRef} className={[styles.menu, "menu-container"].join(" ")}>
//         <Button
//           className={["NOT-round", styles.navLink].join(" ")}
//           link
//           href="/play"
//           selected={playSelected}
//         >
//           PLAY
//         </Button>
//         <Button
//           className={["NOT-round", styles.navLink].join(" ")}
//           link
//           href="/stats"
//           selected={statsSelected}
//         >
//           STATS
//         </Button>
//         <Button
//           className={["NOT-round", styles.navLink].join(" ")}
//           link
//           href="/settings"
//           selected={settingsSelected}
//         >
//           SETTINGS
//         </Button>
//       </nav>
//     </div>
//   );
// };

// export default Menu;

import { FunctionalComponent } from "preact";

interface Props {
  playSelected?: boolean;
  statsSelected?: boolean;
  settingsSelected?: boolean;
  bugSelected?: boolean;
}

const Menu: FunctionalComponent<Props> = ({
  playSelected,
  statsSelected,
  settingsSelected,
  bugSelected
}) => {
  return <div>Menu</div>;
};

export default Menu;
