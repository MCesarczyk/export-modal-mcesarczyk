import { render, screen } from '@testing-library/react'
import Label from '../Label';

test('Label should render properly without props', () => {
  render(<Label children={<></>} />);

  expect(screen.getByTestId("label")).toBeInTheDocument();
  expect(screen.queryByText(/this is a label!/)).not.toBeInTheDocument();
});

test("Label should have have label when props are given", () => {
  render(<Label text="this is a label!" children={<></>} />);

  expect(screen.queryByText(/this is a label!/)).toBeInTheDocument();
});