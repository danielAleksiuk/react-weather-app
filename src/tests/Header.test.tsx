import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('Header: renders title text', () => {
  const { getByText } = render(<Header />);
  const titleElement = getByText(/Weather now/i);
  expect(titleElement).toBeInTheDocument();
});
