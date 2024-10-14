import LoanSchema from '../Models/LoanSchema.js'
import { format } from "@formkit/tempo"
import PromptSync from 'prompt-sync';

let prompt = PromptSync()

const newLoan = (dataLoan) => {
    console.log(dataLoan);
    if (!dataLoan.client_id || !dataLoan.book_id) {
        console.log("Los campos client_id y book_id son obligatorios");
        prompt("Presione una tecla para continuar")
        return null;
    }

    const loanDate = dataLoan.loan_date ? new Date(dataLoan.loan_date) : new Date();
    const dueDate = addDays(loanDate, 14); // 14 días de préstamo por defecto

    const newLoan = LoanSchema.create({
        _id: Math.floor(Math.random()*100000), // Usa un número aleatorio como ID único
        client_id: dataLoan.client_id,
        book_id: dataLoan.book_id,
        loan_date: format(loanDate, "YYYY-MM-DD"),
        due_date: format(dueDate, "YYYY-MM-DD"),
        return_date: dataLoan.return_date ? format(new Date(dataLoan.return_date), "YYYY-MM-DD") : null
    });

    if (newLoan.return_date && new Date(newLoan.return_date) <= new Date(newLoan.loan_date)) {
        console.log("La fecha de devolución debe ser posterior a la fecha de préstamo");
        prompt("Presione una tecla para continuar")
        return null;
    }

    return newLoan.save();
}

// Función para obtener todos los préstamos
const getAllLoans = () => {
    return LoanSchema.find();
}

// Función para obtener un préstamo por ID
const getLoanById = (id) => {
    return LoanSchema.findOne({ _id: id });
}

// Función para actualizar la fecha de devolución de un préstamo
const updateReturnDate = (id, returnDate) => {
    return LoanSchema.findOne({ _id: id }).then(loan => {
        if (!loan) {
            throw new Error('Préstamo no encontrado');
        }
        
        const newReturnDate = new Date(returnDate);
        if (newReturnDate <= new Date(loan.loan_date)) {
            throw new Error('La fecha de devolución debe ser posterior a la fecha de préstamo');
        }

        loan.return_date = format(newReturnDate, "YYYY-MM-DD");
        return loan.save();
    });
}

export { newLoan, getAllLoans, getLoanById, updateReturnDate }
