import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

const coverImgSrc =
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImgSrc} />

      <div className={styles.profile}>
        <Avatar className={styles.avatar} src="https://github.com/marcoskloss.png" />
        <strong>Marcos Kloss</strong>
        <span>Web Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
