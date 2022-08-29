import styles from "./styles.module.css";

export function Avatar({ src, alt = "", className = "", hasBorder = true }) {
  let style = hasBorder
    ? `${styles.avatar} ${styles.hasBorder} ${className}`
    : `${styles.avatar} ${className}`;

  return <img className={style} src={src} alt={alt} />;
}
