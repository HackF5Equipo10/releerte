import {screen, render} from '@testing-library/react';
import BooksComponents from '../Components/Books/BooksComponents';


describe('BooksComponents', () => {
    
    test('img element is in the document', () =>{
        render(<BooksComponents />);
        const card = screen.getByRole('img');
        expect(card).toBeInTheDocument();
    });

    test('button element with name: *VER FIVHA* is in the document', () =>{
        render(<BooksComponents />);
        const button = screen.getByRole('button', {name:'VER FICHA'});
        expect(button).toBeInTheDocument();
    })

    test('button element with name: *Añadir a la cesta* is in the document', () =>{
        render(<BooksComponents />);
        const button = screen.getByRole('button', {name:'AÑADIR A LA CESTA'});
        expect(button).toBeInTheDocument();
    })

});