import { render, fireEvent, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Input from '../Input'

let container: any = null;
let onInputChangeMock = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  onInputChangeMock.mockClear();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Input should render properly', () => {
  render(<Input value="" setValue={onInputChangeMock} />);

  expect(screen.getByTestId("input")).toBeInTheDocument();
});

test('Input should display given placeholder', () => {
  render(<Input value="" placeholder="example" setValue={onInputChangeMock} />);

  expect(screen.getByTestId("input")).toHaveAttribute('placeholder', 'example');
});

test('Input should have type according to parameter', () => {
  render(<Input value="" type="number" setValue={onInputChangeMock} />);

  expect(screen.getByTestId("input")).toHaveAttribute('type', 'number');
});

test("Input shouldn't have have label initially", () => {
  act(() => {
    render(<Input value="" type="number" setValue={onInputChangeMock} labelText="this is a label!" />);
  })

  expect(screen.queryByText(/this is a label!/)).not.toBeInTheDocument();
});

test("Input should have have label when 'labeled' parameter is set to true", () => {
  render(<Input value="" type="number" setValue={onInputChangeMock} labeled={true} labelText="this is a label!" />);

  expect(screen.queryByText(/this is a label!/)).toBeInTheDocument();
});

test('Input should change value', () => {
  render(<Input value="" setValue={onInputChangeMock} />);

  fireEvent.change(screen.getByTestId("input"), { target: { value: "some text" } });
  expect(onInputChangeMock).toHaveBeenCalledTimes(1);
  expect(onInputChangeMock).toHaveBeenCalledWith("some text");
});

test('Input should be possible to clear', () => {
  render(<Input value="some text" setValue={onInputChangeMock} />);

  fireEvent.change(screen.getByTestId("input"), { target: { value: "" } });
  expect(onInputChangeMock).toHaveBeenCalledTimes(1);
  expect(onInputChangeMock).toHaveBeenCalledWith("");
});

test("Providing empty value shouldn't trigger any action", () => {
  render(<Input value="" setValue={onInputChangeMock} />);

  fireEvent.change(screen.getByTestId("input"), { target: { value: "" } });
  expect(onInputChangeMock).toHaveBeenCalledTimes(0);
});

test('Only changing value should trigger action', () => {
  render(<Input value="" setValue={onInputChangeMock} />);

  fireEvent.change(screen.getByTestId("input"), { target: { value: "" } });
  expect(onInputChangeMock).toHaveBeenCalledTimes(0);
});