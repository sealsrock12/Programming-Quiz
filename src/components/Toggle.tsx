import styles from "styles/Toggle.module.scss";

import storage from "@/lib/storage";

export default function Toggle({ name, checked = true }) {
  // if (checked) {
  //   localStorage.setItem("name", "true");
  // }

  return (
    <div className={styles.toggle}>
      <label className={styles.toggleWrapper}>
        <input
          type="checkbox"
          className={styles.toggleCheckbox}
          onChange={event => {
            console.log(event.target.checked);
            localStorage.setItem(name, event.target.checked);
          }}
          defaultChecked={checked}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
