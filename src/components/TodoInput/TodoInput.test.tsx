import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from './TodoInput';

test('проверка ввода текста и отправки формы', () => {
  const addTodoMock = jest.fn();
  render(<TodoInput addTodo={addTodoMock} />);

  const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(inputElement, { target: { value: 'Тестовая задача' } });

  const formElement = screen.getByTestId('todo-form');
  fireEvent.submit(formElement);

  expect(addTodoMock).toHaveBeenCalledWith('Тестовая задача');
  expect(inputElement).toHaveValue(''); 
});
