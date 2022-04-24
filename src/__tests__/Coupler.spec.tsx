import { render, screen } from '@testing-library/react'
import Coupler from '../Coupler';

test('Coupler should render properly without props', () => {
  render(<Coupler text="" />);

  expect(screen.getByTestId("coupler")).toBeInTheDocument();
  expect(screen.queryByText(/special text!/)).not.toBeInTheDocument();
});

test("Coupler should have have label when props are given", () => {
  render(<Coupler text="special text!" />);

  expect(screen.queryByText(/special text!/)).toBeInTheDocument();
});