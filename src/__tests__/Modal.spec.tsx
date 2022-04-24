import { render, screen } from '@testing-library/react';
import Modal from '../ModalWrapper/Modal';

test("modal should be mounted properly", () => {
  render(<Modal visible={false} title={'Modal title'} />);

  expect(screen.getByTestId("modal-body")).toBeInTheDocument();
  expect(screen.getByText(/modal title/i)).toBeInTheDocument();
});

test("modal should when visible when props 'visible' set to true", () => {
  render(<Modal visible={true} title={'Modal title'} />);

  const modal = screen.getByTestId("modal-body");
  expect(screen.getByTestId("modal-body")).not.toHaveClass('ModalBody ModalBody--hidden');
});

test("modal should when invisible when props 'visible' set to false", () => {
  render(<Modal visible={false} title={'Modal title'} />);

  expect(screen.getByTestId("modal-body")).toHaveClass('ModalBody ModalBody--hidden');
});
