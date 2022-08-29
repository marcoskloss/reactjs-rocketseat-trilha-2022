import { Check } from "phosphor-react";

import styles from "./styles.module.css";

interface Props {
  onToggle: () => void;
  isChecked: boolean;
}

export function Checkbox({ onToggle, isChecked }: Props) {
  return (
    <button
      className={`${styles.container} ${isChecked && styles.checked}`}
      title={isChecked ? "Desconcluir Todo" : "Concluir Todo"}
      onClick={() => {
        onToggle();
        console.log("EXEC!");
      }}
    >
      {isChecked && <Check size={16} />}
    </button>
  );
}
