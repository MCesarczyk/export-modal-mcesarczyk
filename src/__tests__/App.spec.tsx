import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders modal opening button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/open modal/i);
  screen.debug(buttonElement)
  expect(buttonElement).toBeInTheDocument();
});
