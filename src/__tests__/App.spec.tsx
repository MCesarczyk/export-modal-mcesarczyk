import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders modal opening button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/open modal/i);
  expect(buttonElement).toBeInTheDocument();
});
