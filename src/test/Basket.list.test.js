import { render, screen } from '@testing-library/react';
import BasketList1 from '../Components/Basket/BasketList1';

describe('BasketList1', () => {
  test('renders "CESTA" in the header', () => {
    render(<BasketList1 order={[]} />);
    const header = screen.getByText('CESTA');
    expect(header).toBeInTheDocument();
  });

  test('renders "NO SE HE ENCONTRADO NINGUN LIBRO" when the order is empty', () => {
    render(<BasketList1 order={[]} />);
    const message = screen.getByText('NO SE HE ENCONTRADO NINGUN LIBRO');
    expect(message).toBeInTheDocument();
  });

  test('renders the items in the order', () => {
    const order = [
      { id: 1, title: 'Book 1', quantity: 2, price: 10, donacion: 1 },
      { id: 2, title: 'Book 2', quantity: 1, price: 15, donacion: 0.5 },
    ];
    render(<BasketList1 order={order} />);
    const item1 = screen.getByText('Book 1');
    const item2 = screen.getByText('Book 2');
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  test('renders the total price of the order', () => {
    const order = [
      { id: 1, title: 'Book 1', quantity: 2, price: 10, donacion: 1 },
      { id: 2, title: 'Book 2', quantity: 1, price: 15, donacion: 0.5 },
    ];
    render(<BasketList1 order={order} />);
    const totalPrice = screen.getByText(/Total:/);
    expect(totalPrice).toHaveTextContent('Total: 27.5 eu.');
  });

  test('renders the "FINALIZAR" button', () => {
    render(<BasketList1 order={[]} />);
    const button = screen.getByRole('button', { name: 'FINALIZAR' });
    expect(button).toBeInTheDocument();
  });
});

/* 

This test suite covers the basic functionality of the BasketList1 component, including rendering the correct header, showing the appropriate message when the order is empty, rendering the items in the order, calculating and displaying the total price of the order, and rendering the "FINALIZAR" button. You can customize the test cases further based on your specific requirements */