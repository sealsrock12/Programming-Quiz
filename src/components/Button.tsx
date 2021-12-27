import styles from "@/styles/component-styles/Button.module.scss";
import { FunctionalComponent } from "preact";

interface Props {
  children: any;
  link?: any;
  href?: any;
  className?: any;
  selected?: any;
  type?: any;
  onClick?: any;
  title?: any;
}

const Button: FunctionalComponent<Props> = ({
  children,
  link,
  href,
  className = "",
  type,
  selected,
  onClick,
  title
}) => {
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
};
// )

export default Button;
