import styles from "@/styles/component-styles/Toggle.module.scss";

export default function Toggle({ name, checked = true }) {
  const refreshAfterToggle = {
    "dark-mode": true
  };

  return (
    <div className={styles.toggle}>
      <label className={styles.toggleWrapper}>
        <input
          type="checkbox"
          className={styles.toggleCheckbox}
          onChange={event => {
            console.log(event.target.checked);
            localStorage.setItem(name, event.target.checked);

            setTimeout(() => {
              if (refreshAfterToggle["dark-mode"]) {
                location.reload();
              }
            }, 150);
          }}
          defaultChecked={checked}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
