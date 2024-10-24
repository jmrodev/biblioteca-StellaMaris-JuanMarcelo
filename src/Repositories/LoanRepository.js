import Loan from '../Models/LoanSchema.js'
import { getAllClients } from './ClientRepository.js';
import { getAllBooks } from './BookRepository.js';
import { format} from "@formkit/tempo"

const newLoan = (dataLoan) => {
    if (!dataLoan.client_id || !dataLoan.book_id) {
        throw new Error("ID del cliente y del libro son obligatorios");
    }

    const fechaPrestamo = new Date();
    const fechaDevolucion = new Date();

    fechaDevolucion.setDate(fechaPrestamo.getDate()+ 14); 

    const newLoan = Loan.create({
        _id: Math.floor(Math.random() * 100000),
        client_id: parseInt(dataLoan.client_id),
        book_id: parseInt(dataLoan.book_id),
        fecha_prestamo: format(fechaPrestamo, "full"),
        fecha_devolucion: format(fechaDevolucion, "full"),
        estado: "activo"
    });

    return newLoan.save();
}

const removeLoan = (id) => {
    const deleteLoan = Loan.remove({ _id: parseInt(id) });
    return deleteLoan;
}

const getAllLoans = () => {

    let Clients = getAllClients()
    let Books = getAllBooks()
    const loans = Loan.find({});

    const loansWithDetails = loans.map(loan => {
        const client = Clients.find(client => client._id === loan.client_id);
        const book = Books.find(book => book._id === loan.book_id);

        return {
            ...loan._doc,
            id: loan._id,
            client_name: client ? client.username : "Cliente no encontrado",
            book_title: book ? book.titulo : "Libro no encontrado",
            F_prestamo: loan.fecha_prestamo,
            F_devolucion: loan.fecha_devolucion

        };
    });

    return loansWithDetails
    
}

const getLoanById = (id) => {
   
    return Loan.findOne({ _id: parseInt(id) });
}

const updateLoan = (dataLoan) => {
    const loan = Loan.findOne({ _id: parseInt(dataLoan.idLoan) });

    if (!loan) {
        throw new Error("Préstamo no encontrado");
    }

    loan.client_id = parseInt(dataLoan.client_id);
    loan.book_id = parseInt(dataLoan.book_id);
    loan.fecha_devolucion = dataLoan.fecha_devolucion;
    loan.estado = dataLoan.estado;

    return loan.save();
}

export { newLoan, removeLoan, getAllLoans, updateLoan, getLoanById }
