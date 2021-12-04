import styles from "@/styles/component-styles/Button.module.scss";

export default function Button({
  children,
  link,
  href,
  className = "",
  type,
  selected,
  onClick
}) {
  return link ? (
    <a
      className={`${styles.btn} ${className} ${
        selected ? `${styles.selected}` : ""
      }`}
      href={href}
    >
      {children}
    </a>
  ) : (
    <button
      className={`${styles.btn} ${className} ${
        selected ? styles.selected : ""
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
