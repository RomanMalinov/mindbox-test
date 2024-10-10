import React, { useState } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import { Todo } from '../../types/Todo';
import styles from '../App/App.module.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'uncompleted'>('all');
  const [isListVisible, setIsListVisible] = useState(true); // Состояние для видимости задач

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.isCompleted;
    if (filter === 'uncompleted') return !todo.isCompleted;
    return true;
  });

  const uncompletedCount = todos.filter(todo => !todo.isCompleted).length;

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todos</h1>
      <div className={styles.table}>
        <div className={styles.todoInput}>
          <button
            className={styles.toggleButton}
            onClick={() => setIsListVisible(!isListVisible)}
          >
            {isListVisible ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: 0.2 }}  // Добавлено opacity
              >
                <path
                  d="M6 10L12 16L18 10"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: 0.2 }}
              >
                <path
                  d="M6 14L12 8L18 14"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
          <TodoInput addTodo={addTodo} />
        </div>
        {isListVisible && (
          <ul className={styles.todoList}>
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
          </ul>
        )}
        <div className={styles.bottomControls}>
          <span className={styles.itemsLeft}>{uncompletedCount} items left</span>

          <div className={styles.filters}>
            <button
              className={filter === 'all' ? styles.activeButton : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'uncompleted' ? styles.activeButton : ''}
              onClick={() => setFilter('uncompleted')}
            >
              Activ
            </button>
            <button
              className={filter === 'completed' ? styles.activeButton : ''}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>

          <span className={styles.clearCompleted}>
            <button onClick={clearCompleted}>Clear completed</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
