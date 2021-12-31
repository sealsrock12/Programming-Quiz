import styles from "@/styles/component-styles/Button.module.scss";
import { FC } from "react";

interface Props {
  children: any;
  link?: any;
  href?: any;
  className?: any;
  selected?: any;
  type?: any;
  onClick?: any;
  title?: any;
  nonExistent?: boolean;
}

const Button: FC<Props> = ({
  children,
  link,
  href,
  className = "",
  type,
  selected,
  onClick,
  title,
  nonExistent
}) => {
  if (nonExistent) return null;

  return link ? (
    <a
      className={`${styles.btn} ${className} ${
        selected ? `${styles.selected}` : ""
      } ${selected ? "link-selected" : ""}`}
      href={href}
    >
      {children}
    </a>
  ) : (
    <button
      className={`${styles.btn} ${className} ${
        selected ? styles.selected : ""
      } ${title === "submit" ? "submit-button" : ""}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
// )

export default Button;
