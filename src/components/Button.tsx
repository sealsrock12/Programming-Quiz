import styles from "@/styles/component-styles/Button.module.scss";

export default function Button({
  children,
  link,
  href,
  className = "",
  type,
  selected,
  onClick,
  title
}) {
  return link ? (
    <a
      className={[
        `${styles.btn} ${className} ${selected ? `${styles.selected}` : ""}`,
        selected ? "link-selected" : ""
      ].join(" ")}
      href={href}
    >
      {children}
    </a>
  ) : (
    <button
      className={[
        `${styles.btn} ${className} ${selected ? styles.selected : ""}`,
        title === "submit" ? "submit-button" : ""
      ].join(" ")}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
