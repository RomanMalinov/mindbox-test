import React from 'react';
import { Todo } from '../../types/Todo';
import styles from './TodoItem.module.css';

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className={styles.container}>
      <label className={styles.customRadio}>
        <input
          type="radio"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={styles.customRadio}></span>
      </label>
      <span
        className={`${styles.todoText} ${todo.isCompleted ? styles.completed : ''}`}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
