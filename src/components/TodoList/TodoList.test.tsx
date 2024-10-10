import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { Todo } from '../../types/Todo';

test('проверка отображения списка задач', () => {
  const todos: Todo[] = [
    { id: 1, text: 'Первая задача', isCompleted: false },
    { id: 2, text: 'Вторая задача', isCompleted: true },
  ];
  const toggleTodoMock = jest.fn();

  render(<TodoList todos={todos} toggleTodo={toggleTodoMock} />);

  const firstTodo = screen.getByText(/Первая задача/i);
  const secondTodo = screen.getByText(/Вторая задача/i);

  expect(firstTodo).toBeInTheDocument();
  expect(secondTodo).toBeInTheDocument();
});
