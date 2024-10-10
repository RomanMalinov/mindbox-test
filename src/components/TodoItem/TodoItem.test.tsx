import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo } from '../../types/Todo';

test('проверка переключения статуса задачи', () => {
  const todo: Todo = { id: 1, text: 'Тестовая задача', isCompleted: false };
  const toggleTodoMock = jest.fn();

  render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} />);

  const radioButton = screen.getByRole('radio');
  fireEvent.click(radioButton);

  expect(toggleTodoMock).toHaveBeenCalledWith(todo.id);
});
