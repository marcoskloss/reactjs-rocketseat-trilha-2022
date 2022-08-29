import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";

import styles from "./App.module.css";
import { Todo } from "./components/Todo";

export interface ITodo {
  id: string;
  content: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddNewTodo = (content: string) => {
    const todo: ITodo = {
      id: uuid(),
      content,
      done: false,
    };
    setTodos((state) => [...state, todo]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prevState) => {
      console.log("exec!");
      const todo = prevState.find((todo) => todo.id === id);
      if (todo) todo.done = !todo.done;
      console.log(todo);
      return [...prevState];
    });
  };

  const handleDeleteTodo = (id: string) => {
    console.log("exec!");
    setTodos((state) => state.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header />
      <main className={styles.content}>
        <TodoForm onSubmit={handleAddNewTodo} />

        <div>
          <header className={styles.stats}>
            <div className={`${styles.statBox} ${styles.created}`}>
              <strong>Tarefas criadas</strong>
              <span>0</span>
            </div>
            <div className={`${styles.statBox} ${styles.done}`}>
              <strong>Tarefas concluídas</strong>
              <span>0</span>
            </div>
          </header>

          <div className={styles.list}>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                data={todo}
                onDelete={() => handleDeleteTodo(todo.id)}
                onToggleCheckbox={() => handleToggleTodo(todo.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
