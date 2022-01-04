import styles from "@/styles/components/Toggle.module.scss";

export default function Toggle({ name, checked = true, setter }) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (setter) {
      setter(e.target.checked);
    }
  }

  return (
    <div className={styles.toggle}>
      <label className={styles.toggleWrapper}>
        <input
          type="checkbox"
          className={styles.toggleCheckbox}
          onChange={onChange}
          defaultChecked={checked}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
