import { FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./style.module.css";

interface Props {
  onSubmit: (content: string) => void;
}

export function TodoForm({ onSubmit }: Props) {
  const [todoText, setTodoText] = useState("");

  const isTodoTextEmpty = todoText.trim().length === 0;

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    onSubmit(todoText);
    setTodoText("");
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="Adicione uma tarefa"
        value={todoText}
        onChange={(ev) => setTodoText(ev.target.value)}
      />
      <button className={styles.submitButton} disabled={isTodoTextEmpty}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
