// import necessary react testing library helpers here
// import the Counter component here
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Counter from '../components/Counter';

// beforeEach(() => {
//   // Render the Counter component here ---> DEPRECATED DUE TO ESLINT RULE
// })

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initCount = screen.getByTestId('count');
  expect(initCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  
  fireEvent.click(screen.getByText('+'));

  const incrCount = screen.getByTestId('count');

  expect(incrCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);

  fireEvent.click(screen.getByText('-'));

  const incrCount = screen.getByTestId('count');

  expect(incrCount).toHaveTextContent('-1');
});
