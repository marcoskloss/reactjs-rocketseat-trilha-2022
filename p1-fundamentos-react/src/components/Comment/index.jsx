import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

export function Comment() {
  return (
    <div className={styles.container}>
      <Avatar
        className={styles.authorAvatar}
        hasBorder={false}
        src="https://github.com/marcoskloss.png"
      />

      <div className={styles.commentContainer}>
        <div className={styles.comment}>
          <header>
            <div className={styles.commentAuthorInfo}>
              <div>
                <strong className={styles.author}>
                  Devon Lane <span>(você)</span>
                </strong>
              </div>
              <time title="11 de Maio às 14:22h" dateTime="2022-05-11 14:22:00">
                Cerca de 2h atrás
              </time>
            </div>
            <button className={styles.deleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p className={styles.text}>Muito bom, parabéns!</p>
        </div>

        <footer className={styles.commentReactions}>
          <button>
            <ThumbsUp size={20} />
            <div>
              <span>Aplaudir</span> <span>•</span> <span>03</span>
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
}
