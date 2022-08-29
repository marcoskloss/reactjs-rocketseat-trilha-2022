import { Trash } from "phosphor-react";
import { Checkbox } from "../Checkbox";
import { ITodo } from "../../App";

import styles from "./styles.module.css";

interface Props {
  data: ITodo;
  onDelete: () => void;
  onToggleCheckbox: () => void;
}

export function Todo({ data, onDelete, onToggleCheckbox }: Props) {
  return (
    <div className={`${styles.todo} ${data.done && styles.done}`}>
      <Checkbox onToggle={onToggleCheckbox} isChecked={data.done} />
      <span className={styles.todoText}>{data.content}</span>
      <button
        className={styles.deleteTodo}
        title="Excluir Todo"
        onClick={onDelete}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
