import Logo from "../../assets/logo.svg";

import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo do TodoList" />
    </header>
  );
}
