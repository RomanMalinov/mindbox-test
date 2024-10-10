import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('проверка отображения заголовка', () => {
  render(<App />);
  const titleElement = screen.getByText(/Todos/i);
  expect(titleElement).toBeInTheDocument();
});

test('проверка добавления новой задачи', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(inputElement, { target: { value: 'Новая задача' } });
  fireEvent.submit(inputElement);
  const todoElement = screen.getByText(/Новая задача/i);
  expect(todoElement).toBeInTheDocument();
});
