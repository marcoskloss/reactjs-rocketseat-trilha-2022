import styles from "./styles.module.css";
import logoImg from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logotipo do Ignite" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
