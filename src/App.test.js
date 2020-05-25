import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders login screen', () => {
  const { getByTestId } = render(<App />);
  const router = getByTestId('login-container');
  expect(router).toBeInTheDocument();
});
