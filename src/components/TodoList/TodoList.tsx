import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../types/Todo';

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div >
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

