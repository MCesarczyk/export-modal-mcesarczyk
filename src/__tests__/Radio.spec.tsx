import { render, fireEvent, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Radio from '../Radio'

let container: any = null;
let onRadioChangeMock = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  onRadioChangeMock.mockClear();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Radio button should render properly with label', () => {
  render(<Radio value="" setOption={onRadioChangeMock} name="radio" checked={false} label="lorem ipsum" />, container);

  expect(screen.getByLabelText("lorem ipsum")).toBeInTheDocument();
});

test('Radio should change value after click', () => {
  act(() => {
    render(<Radio value="test" setOption={onRadioChangeMock} name="radio" checked={false} label="lorem ipsum" />, container);

  })

  fireEvent.click(screen.getByTestId("radio"));
  expect(onRadioChangeMock).toHaveBeenCalledTimes(1);
  expect(onRadioChangeMock).toHaveBeenCalledWith("test");

  fireEvent.click(screen.getByTestId("radio"));
  expect(onRadioChangeMock).toHaveBeenCalledTimes(2);
  expect(onRadioChangeMock).toHaveBeenCalledWith("test");
});

test('Radio should change value after label click', () => {
  act(() => {
    render(<Radio value="test" setOption={onRadioChangeMock} name="radio" checked={false} label="lorem ipsum" />, container);

  })

  fireEvent.click(screen.getByText(/lorem ipsum/));
  expect(onRadioChangeMock).toHaveBeenCalledTimes(1);
  expect(onRadioChangeMock).toHaveBeenCalledWith("test");

  fireEvent.click(screen.getByText(/lorem ipsum/));
  expect(onRadioChangeMock).toHaveBeenCalledTimes(2);
  expect(onRadioChangeMock).toHaveBeenCalledWith("test");
});

test("Radio should be checked when prop is set to true", () => {
  render(<Radio value="test" setOption={onRadioChangeMock} name="test" checked={true} label="just do test" />, container);

  expect(screen.getByLabelText("just do test")).toHaveAttribute('checked');
});

test("Radio should be unchecked when prop is set to false", () => {
  render(<Radio value="test" setOption={onRadioChangeMock} name="test" checked={false} label="just do test" />, container);

  expect(screen.getByLabelText("just do test")).not.toHaveAttribute('checked');
});