import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { v4 as uuid } from "uuid";
import { useState } from "react";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(ev) {
    ev.preventDefault();
    setComments((prevState) => [
      ...prevState,
      { id: uuid(), content: commentText },
    ]);
    setCommentText("");
  }

  function handleDeleteComment(commentId) {
    setComments((prevState) => prevState.filter((c) => c.id !== commentId));
  }

  const isNewCommentEmpty = commentText.trim().length === 0;
  const isCommentListNotEmpty = comments.length !== 0;

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.text}>{line.text}</p>;
          }
          if (line.type === "link") {
            return (
              <a href="" key={line.text} className={styles.tag}>
                {line.text}
              </a>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <h2 className={styles.formTitle}>Deixe seu feedback</h2>
        <textarea
          value={commentText}
          onChange={(ev) => setCommentText(ev.target.value)}
          placeholder="Escreva um comentário..."
        />
        <footer>
          <button
            className={styles.submitButton}
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div
        className={`${styles.commentList} ${
          isCommentListNotEmpty && styles.hasComments
        }`}
      >
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            content={comment.content}
            onDelete={() => handleDeleteComment(comment.id)}
          />
        ))}
      </div>
    </div>
  );
}
