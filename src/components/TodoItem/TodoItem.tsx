import React, { useState } from 'react';
import { Todo } from '../../types/Todo';
import styles from './TodoItem.module.css';

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const handleRadioClick = () => {
    if (isChecked) {
      setIsChecked(false);
      toggleTodo(todo.id);
    } else {
      setIsChecked(true);
      toggleTodo(todo.id);
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.customRadio}>
        <input
          type="radio"
          checked={isChecked}
          onClick={handleRadioClick}
          readOnly
        />
        <span className={styles.customRadio}></span>
      </label>
      <span
        className={`${styles.todoText} ${isChecked ? styles.completed : ''}`}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
