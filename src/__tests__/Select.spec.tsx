import { render, fireEvent, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom';
import { weekdays } from '../assets/formData';
import Select from '../Select'

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

test('Select should render properly', () => {
  render(<Select value="" setValue={onInputChangeMock} options={[]} />);

  expect(screen.getByTestId("select")).toBeInTheDocument();
});

test('Select should render options from array', () => {
  render(<Select value="" setValue={onInputChangeMock} options={weekdays} />);

  expect(screen.getByText(/Monday/)).toBeInTheDocument();
  expect(screen.getByText(/Friday/)).toBeInTheDocument();
  expect(screen.getByText(/Saturday/)).toBeInTheDocument();
});

test('Select should return value of given option', () => {
  render(<Select value="" setValue={onInputChangeMock} options={weekdays} />);

  fireEvent.change(screen.getByTestId("select"), { target: { value: "Thursday" } });
  expect(onInputChangeMock).toHaveBeenCalledTimes(1);
  expect(onInputChangeMock).toHaveBeenCalledWith("Thursday");
});