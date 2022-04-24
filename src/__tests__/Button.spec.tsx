import { unmountComponentAtNode } from 'react-dom';
import { render, act, fireEvent, screen } from '@testing-library/react';
import Button from '../Button';

let container: any = null;
let onButtonClickMock = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  onButtonClickMock.mockClear();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('button should render properly with props', () => {
  render(<Button title={'click me'} onClick={() => { }} />, container);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});

test('button should run passed function', () => {
  act(() => {
    render(<Button title={''} onClick={onButtonClickMock} />, container);
  });

  fireEvent.click(screen.getByRole('button'));
  expect(onButtonClickMock).toHaveBeenCalledTimes(1);

  fireEvent.click(screen.getByRole('button'));
  expect(onButtonClickMock).toHaveBeenCalledTimes(2);
});
