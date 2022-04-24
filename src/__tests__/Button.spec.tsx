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
  render(<Button type='' title={'click me'} onClick={() => { }} />, container);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});

test('button should run passed function', () => {
  act(() => {
    render(<Button type='' title={''} onClick={onButtonClickMock} />, container);
  });

  fireEvent.click(screen.getByRole('button'));
  expect(onButtonClickMock).toHaveBeenCalledTimes(1);

  fireEvent.click(screen.getByRole('button'));
  expect(onButtonClickMock).toHaveBeenCalledTimes(2);
});

test('basic button should have light background', () => {
  render(<Button type='' title={'basic button'} onClick={onButtonClickMock} />, container);

  expect(screen.getByText(/basic button/i)).not.toHaveClass("Button Button--primary");
});

test('primary button should have dark background', () => {
  render(<Button type="primary" title={'primary button'} onClick={onButtonClickMock} />, container);

  expect(screen.getByText(/primary button/i)).toHaveClass("Button Button--primary");
});
