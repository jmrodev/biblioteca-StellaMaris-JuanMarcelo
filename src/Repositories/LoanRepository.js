import Loan from '../Models/LoanSchema.js'
import { format } from "@formkit/tempo"

const createNewLoan = (loanData) => {
    if (!loanData.clientId || !loanData.bookId) {
        throw new Error("ID del cliente y del libro son obligatorios");
    }
    const loanDate = new Date();
    const returnDate = new Date();

    returnDate.setDate(loanDate.getDate()+ 14); 

    const newLoan = Loan.create({
        _id: Math.floor(Math.random() * 100000),
        clientId: parseInt(loanData.clientId),
        bookId: parseInt(loanData.bookId),
        loanDate: format(loanDate, "full"),
        returnDate: format(returnDate,"full"),
        status: "active"
    });

    console.log(newLoan);
    
    return newLoan.save();
}

const removeLoan = (id) => {
    const deletedLoan = Loan.remove({ _id: parseInt(id) });
    return deletedLoan;
}

const getAllLoans = () => {
    return Loan.find({});
}

const getLoanById = (id) => {
    return Loan.findOne({ _id: parseInt(id) });
}

const updateLoan = (loanData) => {
    const loan = Loan.findOne({ _id: parseInt(loanData.loanId) });

    if (!loan) {
        throw new Error("Préstamo no encontrado");
    }

    loan.clientId = parseInt(loanData.clientId);
    loan.bookId = parseInt(loanData.bookId);
    loan.returnDate = loanData.returnDate;
    loan.status = loanData.status;

    return loan.save();
}

export { createNewLoan, removeLoan, getAllLoans, updateLoan, getLoanById }
