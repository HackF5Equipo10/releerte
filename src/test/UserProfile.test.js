import { screen, render, fireEvent } from '@testing-library/react';
import UserProfile from '../Pages/User/UserProfile';

describe('UserProfile', () => {
  let booksData;
  let addToOrderMock;
  let removeFromOrderMock;

  beforeEach(() => {
    booksData = [
      {
        id: '1',
        titulo: 'Book 1',
        autores: ['Author 1'],
        isbn: '12345',
        donación: 10,
        imagen: 'http://example.com/book1.jpg',
      },
      {
        id: '2',
        titulo: 'Book 2',
        autores: ['Author 2'],
        isbn: '67890',
        donación: 15,
        imagen: 'http://example.com/book2.jpg',
      },
    ];

    addToOrderMock = jest.fn();
    removeFromOrderMock = jest.fn();
  });

  test('renders BasketList1, BooksList1, and Search components', () => {
    render(<UserProfile />);

    expect(screen.getByText('CESTA')).toBeInTheDocument();
    expect(screen.getByText('Total: 0 eu.')).toBeInTheDocument();
    expect(screen.getByText('NO SE HA ENCONTRADO NINGUN LIBRO')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar libro')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'FINALIZAR' })).toBeInTheDocument();
  });

  test('displays all books when search is empty', () => {
    render(<UserProfile />);
    const book1 = screen.getByText('Book 1');
    const book2 = screen.getByText('Book 2');

    expect(book1).toBeInTheDocument();
    expect(book2).toBeInTheDocument();
  });

  test('displays only matching books when search is not empty', () => {
    render(<UserProfile />);
    const searchInput = screen.getByPlaceholderText('Buscar libro');

    fireEvent.change(searchInput, { target: { value: 'Book 1' } });

    const book1 = screen.getByText('Book 1');
    const book2 = screen.queryByText('Book 2');

    expect(book1).toBeInTheDocument();
    expect(book2).not.toBeInTheDocument();
  });

  test('adds a book to the order when the "Añadir a la cesta" button is clicked', () => {
    render(<UserProfile books={booksData} addToOrder={addToOrderMock} />);

    const addButton = screen.getByRole('button', { name: 'AÑADIR A LA CESTA' });

    fireEvent.click(addButton);

    expect(addToOrderMock).toHaveBeenCalledTimes(1);
    expect(addToOrderMock).toHaveBeenCalledWith(booksData[0]);
  });

  test('removes a book from the order when the "Eliminar" button is clicked', () => {
    const orderData = [{ ...booksData[0], quantity: 1 }];
    render(<UserProfile order={orderData} removeFromOrder={removeFromOrderMock} />);

    const removeButton = screen.getByRole('button', { name: 'Eliminar' });

    fireEvent.click(removeButton);

    expect(removeFromOrderMock).toHaveBeenCalledTimes(1);
    expect(removeFromOrderMock).toHaveBeenCalledWith(booksData[0]);
  });
});


/* 

The component renders the BasketList1, BooksList1, and Search components correctly.
The BooksList1 component displays all books when the search input is empty.
The BooksList1 component displays only matching books when the search input is not empty.
Clicking the "Añadir a la cesta" button calls the addToOrder function with the correct book */